import { Request, Response } from 'express';
import prisma from '../database/database';

class IndexController {
  public async index(req: Request, res: Response) {
    try {
      // ! testing

      const usuarios = await prisma.usuario.findMany();

      // return res.json({ message: 'API Works!' });
      return res.json(usuarios);
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
