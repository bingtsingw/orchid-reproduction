import { change } from '../script';

change(async (db) => {
  await db.createTable('user', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampsNoTZ().createdAt,
    updatedAt: t.timestampsNoTZ().updatedAt,
    deletedAt: t.timestampNoTZ().nullable(),

    vipInCamel: t.json().default({}),
    vip_in_dash: t.json().default({}),
    active: t.boolean(),
  }));
});
