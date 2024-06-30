import { change } from '../script';

change(async (db) => {
  await db.createTable('city', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampNoTZ(),
    updatedAt: t.timestampNoTZ(),
    deletedAt: t.timestampNoTZ().nullable(),
  }));

  await db.createTable('activity', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampNoTZ(),
    updatedAt: t.timestampNoTZ(),
    deletedAt: t.timestampNoTZ().nullable(),

    cityId: t.string(),
  }));

  await db.createTable('activity_member', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampNoTZ(),
    updatedAt: t.timestampNoTZ(),
    deletedAt: t.timestampNoTZ().nullable(),

    activityId: t.string(),
  }));
});
