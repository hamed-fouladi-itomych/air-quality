import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { AirQuality } from './src/db/models/air-quality.model';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  logging: true,
  migrations: [__dirname +`/src/db/migrations/*.ts`],
  entities: [AirQuality],
});
