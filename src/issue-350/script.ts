import { rakeDb } from 'orchid-orm/migrations';
import { BaseTable, CONSTANT } from '../utils';

export const change = rakeDb(
  { databaseURL: CONSTANT.DATABASE_URL },
  {
    snakeCase: true,
    migrationsPath: './migrations',
    baseTable: BaseTable,
    import: (path) => import(path),
  },
);
