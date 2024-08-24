import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseForm } from '../../../../../shared/utils/base-form';
import { Subject, takeUntil } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Rol } from '../../../../../shared/models/rol.interface';

enum Action {
  EDIT = 'edit',
  NEW = 'new',
}

@Component({
  selector: 'app-usuario-dialog',
  templateUrl: './usuario-dialog.component.html',
  styleUrl: './usuario-dialog.component.scss',
})
export class UsuarioDialogComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<any>();
  titleButton = 'Guardar';
  actionTodo = Action.NEW;
  roles: Rol[] = [];
  userForm = this.fb.group({
    cveusuario: [''],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.email]],
    rol: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public baseForm: BaseForm,
    private userService: UsuarioService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UsuarioDialogComponent>
  ) {}

  ngOnInit(): void {
    this.userService
      .getRoles()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Rol[]) => {
        this.roles = res;
        this.pathData();
        this.togglePasswordVisibility();
      });
  }

  pathData() {
    if (this.data.user.cveusuario) {
      this.titleButton = 'Actualizar';
      this.actionTodo = Action.EDIT;

      this.userForm.patchValue({
        cveusuario: this.data.user.cveusuario,
        nombre: this.data.user.nombre,
        apellidos: this.data.user.apellidos,
        username: this.data.user.username,
        rol: this.data.user.rol.cverol,
      });

      this.userForm.get('username')?.disable();
      this.userForm.updateValueAndValidity();
    } else {
      this.titleButton = 'Guardar';
      this.actionTodo = Action.NEW;
    }
  }

  onSave() {
    if (this.userForm.invalid) return;

    const formValue = this.userForm.getRawValue();

    if (this.actionTodo === Action.NEW) {
      const { confirmPassword, cveusuario, ...newUser } = formValue;

      this.userService
        .newUser(newUser)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (resp) => {
            this.snackBar.open(resp.message, 'Aceptar', {
              duration: 1000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'snackbar-success',
            });

            this.dialogRef.close(resp);
          },
          (error) => {
            this.snackBar.open(
              'Ocurrió un error al guardar el usuario',
              'Aceptar',
              {
                duration: 1000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
                panelClass: 'snackbar-error',
              }
            );
          }
        );
    } else {
      const { confirmPassword, password, username, ...updateUser } = formValue;

      console.log(updateUser);
      this.userService
        .updateUser(updateUser)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          (resp) => {
            this.snackBar.open(resp.message, 'Aceptar', {
              duration: 1000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'snackbar-success',
            });
            this.dialogRef.close(resp);
          },
          (error) => {
            this.snackBar.open(
              'Ocurrió un error al actualizar el usuario',
              'Aceptar',
              {
                duration: 1000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
                panelClass: 'snackbar-error',
              }
            );
          }
        );
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  togglePasswordVisibility() {
    const passwordControl = this.userForm.get('password');
    const confirmPasswordControl = this.userForm.get('confirmPassword');

    if (this.actionTodo === Action.NEW) {
      passwordControl?.setValidators([
        Validators.required,
        Validators.minLength(8),
      ]);
      confirmPasswordControl?.setValidators([Validators.required]);
    } else {
      passwordControl?.clearValidators();
      confirmPasswordControl?.clearValidators();
    }

    passwordControl?.updateValueAndValidity();
    confirmPasswordControl?.updateValueAndValidity();
  }
}
