import { Request, Response } from 'express';
import prisma from '../database/database';
import { utils } from '../utils/utils';

class IndexController {
  public async index(req: Request, res: Response) {
    try {
      // ! testing

      // const usuarios = await prisma.usuario.findMany();

      // const user = {
      //   cveUsuario: 1,
      //   nombre: 'Pepe pecas',
      //   rol: [1, 2, 3],
      // };

      // const token = utils.generateJWT(user);
      // console.log(token);

      // let jwt =
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdmVVc3VhcmlvIjoxLCJub21icmUiOiJQZXBlIHBlY2FzIiwicm9sIjpbMSwyLDNdLCJpYXQiOjE3MjAyMjczMzMsImV4cCI6MTcyMDIzMDkzM30.nXIiyWHMetozPQYnxHxgByTYsXERQh-wKnx7VAnCU88';

      // let data = utils.getPayload(jwt);
      // console.log(data);

      return res.json({ message: 'API Works!' });
    } catch (error: any) {
      return res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  public insert(req: Request, res: Response) {
    try {
      return res.json({ message: 'INSERT Works!' });
    } catch (error: any) {
      return res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  public update(req: Request, res: Response) {
    try {
      return res.json({ message: 'UPDATE Works!' });
    } catch (error: any) {
      return res.status(500).json({ message: `Error: ${error.message}` });
    }
  }

  public delete(req: Request, res: Response) {
    try {
      return res.json({ message: 'DELETE Works!' });
    } catch (error: any) {
      return res.status(500).json({ message: `Error: ${error.message}` });
    }
  }
}

export const indexController = new IndexController();
