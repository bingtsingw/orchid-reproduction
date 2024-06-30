import { expect, test } from 'bun:test';
import { db } from './tables';

test('issue', async () => {
  const now = new Date();
  const user = await db.user.create({});
  await db.user.find(user.id).update({ vip: (q) => q.get('vip').jsonSet('to', now) });

  expect(await db.user.find(user.id).get('vip')).toEqual({ to: now.toISOString() });
});
