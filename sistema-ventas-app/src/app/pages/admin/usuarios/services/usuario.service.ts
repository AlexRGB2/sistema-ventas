import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Usuario } from '../../../../shared/models/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private API_URL = `${environment.API_URL}/user`;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API_URL}/getUsers`);
  }

  newUser(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/newUser`, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.API_URL}/updateUser`, user);
  }

  deleteUser(cveUsuario: { cveusuario: number }): Observable<any> {
    return this.http.post(`${this.API_URL}/deleteUser`, cveUsuario);
  }
}
