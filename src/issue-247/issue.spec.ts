import { expect, test } from 'bun:test';
import { dr } from './repo/index';
import { db } from './tables';

test('issue 1', async () => {
  const a1 = await db.activity.create({ userId: (await db.user.create({ active: true })).id });
  const a2 = await db.activity.create({ userId: (await db.user.create({ active: false })).id });

  expect(await db.activity.join('user', (q) => q.where({ active: true }))).toMatchObject([{ id: a1.id }]);
  expect(await db.activity.join('user', (q) => q.where({ active: false }))).toMatchObject([{ id: a2.id }]);
});

test('issue 2', async () => {
  await db.activity.create({ userId: (await db.user.create({ active: true })).id });
  await db.activity.create({ userId: (await db.user.create({ active: false })).id });

  expect(await db.activity.join('user', (q) => dr.user(q).whereActive()).count()).toBe(1);
});

/**
 * issue 1: sub query missing type intelligence
 *
 * In line 9 and line 10, (q) => q.where({ xxx: 'xxx' }) do not have type intelligence, q.where({ any: 'any' }) is accepted.
 */

/**
 * issue 2: sub query with repo wrapper throws ts error
 *
 * In line 17, the editor throws an error.
 */
