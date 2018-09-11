import { Api_keyDao } from '../dao/api_key.dao';
import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  if (req.query.api_key) {
    const apiKey = new Api_keyDao();
    apiKey.get(req.query.api_key)
      .then(() => next())
      .catch(e => res.status(500).send(e));
  } else {
    res.status(500).send('No API_Key');
  }
}
