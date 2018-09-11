import * as express from 'express';
import * as cluster from 'cluster';
import { json as bodyParserJSON, urlencoded } from 'body-parser';
import * as cors from 'cors';
import { cpus } from 'os';

/**
 * LOGGER
 */
import * as morgan from 'morgan';
import { logger } from './lib/log';

import { Routes } from './route';

const isProduction = process.env.NODE_ENV === 'production';

if (cluster.isMaster && isProduction) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {

  const app: express.Application = express();

  const port: number = Number(process.env.PORT || '3000');

  app.use(bodyParserJSON());
  app.use(urlencoded({ extended: true }));
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
  app.use(cors());

  app.use('/', new Routes().routes);

  app.listen(port, () => {
    logger().log(`Worker ${process.pid} started`);
    logger().info(`L'application écoute sur le port ${port} \n http://localhost:${port}/`);
  });
}
