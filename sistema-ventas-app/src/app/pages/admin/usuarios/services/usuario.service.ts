import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Usuario } from '../../../../shared/models/usuario.interface';
import { catchError, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Rol } from '../../../../shared/models/rol.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private API_URL = `${environment.API_URL}/user`;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getUsers(): Observable<Usuario[]> {
    return this.http
      .get<Usuario[]>(`${this.API_URL}/getUsers`, {
        headers: { requireToken: 'true' },
      })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  getRoles(): Observable<Rol[]> {
    return this.http
      .get<Rol[]>(`${environment.API_URL}/rol/getRolesUso`, {
        headers: { requireToken: 'true' },
      })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  newUser(user: any): Observable<any> {
    return this.http
      .post(`${this.API_URL}/newUser`, user, {
        headers: { requireToken: 'true' },
      })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  updateUser(user: any): Observable<any> {
    return this.http
      .put(`${this.API_URL}/updateUser`, user, {
        headers: { requireToken: 'true' },
      })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  deleteUser(cveusuario: number): Observable<any> {
    return this.http
      .delete(`${this.API_URL}/deleteUser/${cveusuario}`, {
        headers: { requireToken: 'true' },
      })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  private handlerError(error: any) {
    var errorMessage = 'Ocurrió un error';

    if (error.error) {
      if (error.error.message) errorMessage = error.error.message;
      else errorMessage = 'Ocurrió un error';
    }

    this.snackBar.open(errorMessage, '', { duration: 3000 });

    return throwError(() => {
      new Error(errorMessage);
    });
  }
}
