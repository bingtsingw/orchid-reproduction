import { expect, test } from 'bun:test';
import { addDays } from 'date-fns';
import { dr } from './repos';
import { db } from './tables';

test('issue', async () => {
  // prepare data
  const activity = await db.activity.create({});
  await db.activityMember.create({
    activityId: activity.id,
    userId: (await db.user.create({ vip: { to: addDays(new Date(), 1).toISOString() } })).id,
  });
  await db.activityMember.create({
    activityId: activity.id,
    userId: (await db.user.create({ vip: { to: addDays(new Date(), 10).toISOString() } })).id,
  });

  // query
  const data = await dr.activityMember.whereByUserVipTo('>', new Date()).whereByUserVipTo('<', addDays(new Date(), 5));
  /**
   * This test is passing correctly, but the implementation of `whereByUserVipTo` is problematic
   */
  expect(data.length).toBe(1);
});

test('return type error', async () => {
  await dr.activityMember
    .whereByUserVipTo('>', new Date())
    .whereByUserVipTo('<', addDays(new Date(), 5))
    // @ts-ignore
    .select('id', 'user.id');
  /**
   * The return type of `whereByUserVipTo` should always be `JoinAddSelectable<xxx>`,
   * but I don't know how to implement it.
   */
});

test('return type error 2', async () => {
  let query = dr.activityMember.where({});

  // @ts-ignore
  query = query.whereByUserVipTo('>', new Date()).whereByUserVipTo('<', addDays(new Date(), 5));
  console.log(query);
});

/**
 * Question 1: How to use joinLeft(xxx) multiple times
 *
 * May be the best way is to ignore multiple joins in the `leftJoin` implementation.
 */

/**
 * Question 1: Are there any better way to implement `whereByUserVipTo`
 *
 * I tried `jsonPath`, it seems not work, so I choose `raw()`, are there any other way to do it.
 */
