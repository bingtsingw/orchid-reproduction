import { test } from 'bun:test';
import { parseISO } from 'date-fns';
import { expectCloseToDate, expectNotCloseToDate } from '../utils';
import { db } from './tables';

test('_base: createdAt', async () => {
  const now = new Date();
  const user = await db.user.create({});
  const query = db.user.find(user.id);

  expectCloseToDate(await query.get('createdAt'), now);

  const t1 = parseISO('2000-01-01');
  await query.update({ createdAt: t1 });
  expectNotCloseToDate(await query.get('createdAt'), now);
  expectCloseToDate(await query.get('createdAt'), t1);
});

test('_base: updatedAt', async () => {
  const now = new Date();
  const user = await db.user.create({});
  const query = db.user.find(user.id);

  expectCloseToDate(await query.get('updatedAt'), now);

  const t1 = parseISO('2000-01-01');
  await query.update({ updatedAt: t1 });
  expectNotCloseToDate(await query.get('updatedAt'), now);
  expectCloseToDate(await query.get('updatedAt'), t1);

  await query.update({});
  expectNotCloseToDate(await query.get('updatedAt'), t1);
  expectCloseToDate(await query.get('updatedAt'), now);

  await query.update({ name: 'xxx' });
  expectNotCloseToDate(await query.get('updatedAt'), t1);
  expectCloseToDate(await query.get('updatedAt'), now);
});
