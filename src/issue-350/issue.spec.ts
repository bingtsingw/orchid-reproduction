import { expect, test } from 'bun:test';
import { parseISO } from 'date-fns';
import { expectCloseToDate } from '../utils';
import { db } from './tables';

test('_base: deletedAt', async () => {
  const now = new Date();
  const user = await db.user.create({});
  const query = db.user.find(user.id);

  expect(await query.get('deletedAt')).toBeNull();

  await query.delete();
  expectCloseToDate((await query.includeDeleted().get('deletedAt')) as Date, now); // error: some problem with `.delete()`

  const t1 = parseISO('2000-01-01');
  await query.includeDeleted().update({ deletedAt: t1.toISOString() });
  expectCloseToDate(await query.includeDeleted().get('deletedAt'), t1); // correct: no problem with `.update({ deletedAt: 'xxx' })`
});
