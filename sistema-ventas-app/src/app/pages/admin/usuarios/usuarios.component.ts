import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../shared/models/usuario.interface';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogComponent } from './components/usuario-dialog/usuario-dialog.component';
import { UsuarioService } from './services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent implements OnInit, OnDestroy, AfterViewInit {
  private destroy$ = new Subject<any>();
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: String[] = [
    'nombre',
    'apellidos',
    'username',
    'rol',
    'acciones',
  ];

  constructor(
    private dialog: MatDialog,
    private userService: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onOpenModal(user = {}) {
    const dialogRef = this.dialog.open(UsuarioDialogComponent, {
      maxWidth: '100%',
      width: '80%',
      data: { user },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  getUsers() {
    this.userService.getUsers().subscribe((resp) => {
      this.dataSource.data = resp;
    });
  }

  confirmDelete(userId: number, username: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: {
        message: `¿Está seguro de que desea eliminar el usuario ${username}?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteUser(userId);
      }
    });
  }

  deleteUser(cveUsuario: number) {
    const cveU = { cveusuario: cveUsuario };

    this.userService.deleteUser(cveU).subscribe((resp) => {
      this.snackBar
        .open(resp.message, 'Aceptar', {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: 'snackbar-success',
        })
        .afterDismissed()
        .subscribe(() => {
          this.getUsers();
        });
    });
  }
}
