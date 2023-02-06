import { Express } from 'express';
import requestLog from '../middlewares/requestlog';
import airQualityRouter from '../routes/air-quality.router';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swaggerJsdoc';

const URL_PREFIX = '/air-quality';
const HEALTHCHECK = '/healthcheck';

export default (app: Express): void => {
  app.use(HEALTHCHECK, (req, res) => res.sendStatus(200));
  app.use(URL_PREFIX, requestLog, airQualityRouter);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
