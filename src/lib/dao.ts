import * as mysql from 'mysql';
import { logger } from './log';

export class Dao {

  private pool = mysql.createPool({
    connectionLinit : 10,
    host            : process.env.DB_HOST || 'localhost',
    user            : process.env.DB_LOGIN || 'root',
    password        : process.env.DB_PASSWORD || '',
    database        : process.env.DB_DATABASE || 'javatest',
  });

  constructor() { }

  getPool() {
    return this.pool;
  }

  execQuery(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      logger().info(query);
      this.pool.query(query, (error, results) => {
        if (error) {
          logger().error(error);
          reject(error);
        }
        resolve(results);
      });
    });
  }
}
