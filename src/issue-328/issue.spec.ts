import { test } from 'bun:test';
import { dr } from './repos';
import { db } from './tables';

test('type error 1', async () => {
  let query = dr.user.where({ name: '1' });
  query = query.test1(); // error
  await query;
});

test('type error 2', async () => {
  let query = dr.user.where({ name: '1' });
  query = query.test2(); // error
  await query;
});

test('normal', async () => {
  let query = db.user.where({ name: '1' });
  query = query.select('name'); // ok
  await query;
});
