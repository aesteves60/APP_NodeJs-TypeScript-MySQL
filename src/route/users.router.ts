import { Router } from 'express';
import { UsersController } from '../controllers/users';

const users: Router = Router();

export class UsersRoutes {
  private usersController: UsersController;

  constructor() {
    this.usersController = new UsersController();
  }

  get routes() {
    const controller = this.usersController;
    users.get('/', controller.test);
    return users;
  }
}
