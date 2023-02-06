import app from './app';
import { connectToDatabase } from './db/dbConnect';

connectToDatabase().then(() => {
  console.log('Success');
});

app.listen(process.env.SERVER_PORT, () => {
  console.info(`Listening on port ${process.env.SERVER_PORT}`);
});
