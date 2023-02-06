import * as dotenv from 'dotenv';
import express from 'express';
import initRoutes from './init/init.routes';
import errorHandler from './middlewares/error-handler';

dotenv.config();

const app = express();

app.use(express.json());
initRoutes(app);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(errorHandler);

export default app;
