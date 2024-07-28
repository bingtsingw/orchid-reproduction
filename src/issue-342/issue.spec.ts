import { expect, test } from 'bun:test';
import { dr } from './repo';
import { db } from './tables';

test('test', async () => {
  await db.user.create({ profile: { name: '%t%' } });
  await db.user.create({ profile: { name: 'test1' } });
  await db.user.create({ profile: { name: 'test2' } });

  expect(await dr.user.whereByProfileName('t').count()).toBe(0);

  expect(await dr.user.whereByProfileName('%t%').count()).toBe(1);
});
