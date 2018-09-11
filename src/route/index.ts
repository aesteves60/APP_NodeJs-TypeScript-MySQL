import { authMiddleware } from '../middleware/auth.middleware';
import { Router } from 'express';
import { UsersRoutes } from './users.router';

export class Routes {
  private usersRoutes: UsersRoutes;
  private router: Router = Router();

  constructor() {
    this.usersRoutes = new UsersRoutes();
  }

  get routes() {
    this.router.use('/api/users', authMiddleware, this.usersRoutes.routes);
    return this.router;
  }
}
