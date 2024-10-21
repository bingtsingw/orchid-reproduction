import { orchidORM } from 'orchid-orm';
import { CONSTANT } from '../../utils';
import { TableComment } from './comment';

export const db = orchidORM(
  {
    log: true,
    databaseURL: CONSTANT.DATABASE_URL,
  },
  {
    comment: TableComment,
  },
);
