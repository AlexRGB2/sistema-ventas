import { Rol } from './rol.interface';

export interface Usuario {
  cveUsuario?: number;
  nombre: String;
  apellidos: String;
  username: String;
  password: String;
  fechaRegistro: Date;
  rol?: Rol;
  cveRol?: String;
}
