import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseForm } from '../../../../../shared/utils/base-form';
import { Subject } from 'rxjs';
import { Usuario } from '../../../../../shared/models/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  userForm = this.fb.group({
    cveusuario: [''],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required, Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.email]],
    rol: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
  });
  isUpdateMode: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public baseForm: BaseForm,
    private userService: UsuarioService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UsuarioDialogComponent>
  ) {}

  ngOnInit(): void {
    this.pathData();
    this.togglePasswordVisibility();
  }

  pathData() {
    if (this.data.user.cveusuario) {
      this.titleButton = 'Actualizar';
      this.actionTodo = Action.EDIT;
      this.isUpdateMode = true;

      //console.log(this.data.user);
      this.userForm.patchValue({
        cveusuario: this.data.user.cveusuario,
        nombre: this.data.user.nombre,
        apellidos: this.data.user.apellidos,
        username: this.data.user.username,
        rol: this.data.user.rol.cverol.toString(),
      });
    } else {
      this.titleButton = 'Guardar';
      this.actionTodo = Action.NEW;
      this.isUpdateMode = false;
    }
  }

  onSave() {
    if (this.userForm.invalid) return;

    let formValue = this.userForm.getRawValue();

    if (this.actionTodo === Action.NEW) {
      let { confirmPassword, cveusuario, ...newUser } = formValue;

      this.userService.newUser(newUser).subscribe(
        (resp) => {
          this.snackBar
            .open(resp.message, 'Aceptar', {
              duration: 2000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'snackbar-success',
            })
            .afterDismissed()
            .subscribe(() => {
              this.dialogRef.close();
            });
        },
        (error) => {
          this.snackBar.open(
            'Ocurrió un error al guardar el usuario',
            'Aceptar',
            {
              duration: 5000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'snackbar-error',
            }
          );
        }
      );
    } else {
      let { confirmPassword, password, username, ...updateUser } = formValue;

      this.userService.updateUser(updateUser).subscribe(
        (resp) => {
          this.snackBar
            .open(resp.message, 'Aceptar', {
              duration: 2000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: 'snackbar-success',
            })
            .afterDismissed()
            .subscribe(() => {
              this.dialogRef.close();
            });
        },
        (error) => {
          console.error(error);
          this.snackBar.open(
            'Ocurrió un error al actualizar el usuario',
            'Aceptar',
            {
              duration: 5000,
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
    const usernameControl = this.userForm.get('username');

    if (!this.isUpdateMode) {
      passwordControl?.setValidators([
        Validators.required,
        Validators.minLength(8),
      ]);
      confirmPasswordControl?.setValidators([Validators.required]);
      usernameControl?.setValidators([
        Validators.required,
        Validators.minLength(3),
      ]);
    } else {
      passwordControl?.clearValidators();
      confirmPasswordControl?.clearValidators();
      usernameControl?.clearAsyncValidators();
    }

    passwordControl?.updateValueAndValidity();
    confirmPasswordControl?.updateValueAndValidity();
    usernameControl?.updateValueAndValidity();
  }
}
