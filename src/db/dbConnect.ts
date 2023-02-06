import { AppDataSource } from '../../data-source';

export const connectToDatabase = (): Promise<void> => {
  return AppDataSource.initialize()
    .then(() => {
      console.log(`Connected to database ${process.env.DB_NAME}`);
    })
    .catch((err: Error) => {
      console.log('Error connecting to database', err);
    });
};
