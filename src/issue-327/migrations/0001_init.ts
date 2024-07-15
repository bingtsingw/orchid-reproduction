import { change } from '../script';

change(async (db) => {
  await db.createTable('user', (t) => ({
    id: t.string().primaryKey(),
    createdAt: t.timestampNoTZ(),
    updatedAt: t.timestampNoTZ(),
    deletedAt: t.timestampNoTZ().nullable(),

    vipInCamel: t.json().default({}),
    vip_in_dash: t.json().default({}),
    active: t.boolean(),
  }));
});
