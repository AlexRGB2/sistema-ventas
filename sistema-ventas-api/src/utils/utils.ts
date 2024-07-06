import jwt from 'jsonwebtoken';
import keys from '../config/keys';
import bcrypt from 'bcryptjs';

/**
 * @name Utils
 * @author Alexis Martínez
 * @creation 05/07/2027
 */
class Utils {
  /**
   * @name generateJWT
   * @description Método para generar un token oAuth
   * @param payload
   * @returns string
   */
  public generateJWT(payload: any): string {
    let token = jwt.sign(payload, keys.secret.jwt, { expiresIn: '1h' });
    return token;
  }

  /**
   * @name getPayload
   * @description Obtener la información del JWT
   * @param token
   * @returns Object
   */
  public getPayload(token: string): any {
    let payload = <any>jwt.verify(token, keys.secret.jwt);

    const { iat, exp, ...data } = payload;

    return data;
  }

  /**
   * @name hashPassword
   * @description Encriptar cadena de texto
   * @param password
   * @returns string
   */
  public async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSaltSync(10);

    return await bcrypt.hashSync(password, salt);
  }

  /**
   * @name checkPassword
   * @description Verificar la contraseña
   * @param password
   * @param encryptedPassword
   * @returns Promise<boolean>
   */
  public async checkPassword(
    password: string,
    encryptedPassword: string
  ): Promise<boolean> {
    return await bcrypt.compareSync(password, encryptedPassword);
    return false;
  }
}

export const utils = new Utils();
