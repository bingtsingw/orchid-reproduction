import { expect, test } from 'bun:test';
import { db } from './tables';

test('this test passes', async () => {
  const now = new Date();
  const user = await db.user.create({});
  await db.user.find(user.id).update({ vip_in_dash: (q) => q.get('vip_in_dash').jsonSet('to', now) });
  expect(await db.user.find(user.id).get('vip_in_dash')).toEqual({ to: now.toISOString() });
});

test('issue: this test does not pass', async () => {
  const now = new Date();
  const user = await db.user.create({});
  await db.user.find(user.id).update({ vipInCamel: (q) => q.get('vipInCamel').jsonSet('to', now) });
  expect(await db.user.find(user.id).get('vipInCamel')).toEqual({ to: now.toISOString() });
});
