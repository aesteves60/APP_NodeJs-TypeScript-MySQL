import { Request, Response } from 'express';

export class UsersController {
  constructor() {}

  test(req: Request, res: Response) {
    try {
      res.send('test');
    } catch (e) {
      res.status(500);
    }
  }
}
