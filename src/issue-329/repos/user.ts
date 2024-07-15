import { createRepo } from 'orchid-orm';
import { db } from '../tables';

export const user = createRepo(db.user, {
  queryMethods: {
    test1: (q) => {
      return q.select('name');
    },
    test2: (q) => {
      return q.order({ name: 'ASC' });
    },
  },
});
