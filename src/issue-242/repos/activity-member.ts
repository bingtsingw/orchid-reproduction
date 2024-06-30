import { createRepo, raw } from 'orchid-orm';
import { db } from '../tables';

export const activityMember = createRepo(db.activityMember, {
  queryMethods: {
    whereByUserVipTo: (q, operator: '>' | '<' | '>=' | '<=' | '=' | '!=', date: Date) => {
      const query = q.where(
        raw({ raw: `("user"."vip"->>'to')::timestamp ${operator} '${date.toISOString()}'::timestamp` }),
      );
      // @ts-ignore
      const isJoinUser = q.toSQL().search('LEFT JOIN "user"') !== -1;
      return isJoinUser ? query : query.leftJoin('user');
    },
  },
});
