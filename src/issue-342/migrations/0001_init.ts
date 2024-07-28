import { change } from '../script';

change(async (db) => {
  await db.createTable('user', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampNoTZ(),
    updatedAt: t.timestampNoTZ(),
    deletedAt: t.timestampNoTZ().nullable(),

    profile: t.json().default({}),
  }));
});
