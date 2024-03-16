import { change } from '../script';

change(async (db) => {
  await db.createTable('user', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampNoTZ(),
    updatedAt: t.timestampNoTZ(),
    deletedAt: t.timestampNoTZ().nullable(),

    vip: t.json().default({}),
    active: t.boolean(),
  }));

  await db.createTable('activity', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampNoTZ(),
    updatedAt: t.timestampNoTZ(),
    deletedAt: t.timestampNoTZ().nullable(),

    userId: t.string(),
  }));
});
