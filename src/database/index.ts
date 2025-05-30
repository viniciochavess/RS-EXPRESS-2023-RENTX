import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'rentx',
  password: 'rentx',
  database: 'rentx',
  entities: ['./src/modules/**/entities/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  synchronize: false,
});
