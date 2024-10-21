import { expect, test } from 'bun:test';
import { commentRepo } from './commentRepo';
import { db } from './tables';

test('_base: deletedAt', async () => {
  const comment = await db.comment.create({});
  const subcomment = await db.comment.create({ rootId: comment.id });

  expect(
    await commentRepo
      .find(comment.id)
      .selectForList()
      .select({ subcomments: (q) => q.subcomments.select('id', 'createdAt', 'rootId') }),
  ).toMatchObject({
    id: comment.id,
    subcomments: [
      {
        id: subcomment.id,
      },
    ],
  });

  // commentRepo(q.subcomments).selectForList() is not working
  expect(
    await commentRepo
      .where({ id: comment.id })
      .selectForList()
      .select({ subcomments: (q) => commentRepo(q.subcomments).selectForList() }),
  ).toMatchObject({
    id: comment.id,
    subcomments: [
      {
        id: subcomment.id,
      },
    ],
  });
});
