import { createRepo, raw } from 'orchid-orm';
import { db } from '../tables';

export const user = createRepo(db.user, {
  queryMethods: {
    whereByProfileName: (q, input: string) => {
      return q.where(
        raw({
          raw: `("user"."profile"->>'name')::text ILIKE $keyword`,
          values: { keyword: input },
        }),
      );
    },
  },
});
