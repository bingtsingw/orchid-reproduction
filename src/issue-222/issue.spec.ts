import { expect, test } from 'bun:test';
import { db } from './tables';

test('ok', async () => {
  const city = await db.city.create({});
  const a1 = await db.activity.create({ cityId: city.id });
  await db.activityMember.create({ activityId: a1.id });
  await db.activityMember.create({ activityId: a1.id });

  const data = await db.city.select({
    activityCount: (q) =>
      q.activities //
        .where((q) => q.members.count().gte(0))
        .count(),
  });
  expect(data).toEqual([{ activityCount: 1 }]);
});

test('issue', async () => {
  const city = await db.city.create({});
  const a1 = await db.activity.create({ cityId: city.id });
  await db.activityMember.create({ activityId: a1.id });
  await db.activityMember.create({ activityId: a1.id });

  const data = await db.city.select({
    activityCount: (q) =>
      q.activities //
        .where((q) => q.members.count().gte(1))
        .count(),
  });
  expect(data).toEqual([{ activityCount: 1 }]);
});
