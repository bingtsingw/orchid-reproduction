import { change } from '../script';

change(async (db) => {
  await db.createTable('user', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampsNoTZ().createdAt,
    updatedAt: t.timestampsNoTZ().updatedAt,
    deletedAt: t.timestampNoTZ().nullable(),

    vip: t.json().default({}),
  }));

  await db.createTable('activity', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampsNoTZ().createdAt,
    updatedAt: t.timestampsNoTZ().updatedAt,
    deletedAt: t.timestampNoTZ().nullable(),
  }));

  await db.createTable('activity_member', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampsNoTZ().createdAt,
    updatedAt: t.timestampsNoTZ().updatedAt,
    deletedAt: t.timestampNoTZ().nullable(),

    activityId: t.string(),
    userId: t.string(),
  }));
});
