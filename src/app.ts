import * as dotenv from 'dotenv';
import express from 'express';
import initRoutes from './init/init.routes';

dotenv.config();

const app = express();

app.use(express.json());
initRoutes(app);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
