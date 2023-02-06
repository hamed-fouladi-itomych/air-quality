import * as dotenv from 'dotenv';
import express from 'express';
import initRoutes from './init/init.routes';
import errorHandler from './middlewares/error-handler';
import cors from 'cors';

dotenv.config();

const app = express();

const options = {
  allowedHeaders: '*',
  credentials: true,
  methods: '*',
  origin: '*',
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

app.use(express.json());
initRoutes(app);
app.use(cors(options));
app.use(errorHandler);

export default app;
