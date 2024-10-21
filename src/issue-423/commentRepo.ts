import { createRepo } from 'orchid-orm';
import { db } from './tables';

const selectForList = db.comment.makeHelper((q) => {
  return q.select('id', 'createdAt', 'rootId');
});

export const commentRepo = createRepo(db.comment, {
  queryMethods: {
    selectForList: (q) => {
      return selectForList(q);
    },
  },
});
