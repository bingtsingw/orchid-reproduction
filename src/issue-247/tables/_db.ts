import { orchidORM } from 'orchid-orm';
import { CONSTANT } from '../../utils';
import { TableActivity } from './activity';
import { TableUser } from './user';

export const db = orchidORM(
  {
    log: true,
    databaseURL: CONSTANT.DATABASE_URL,
  },
  {
    user: TableUser,
    activity: TableActivity,
  },
);
