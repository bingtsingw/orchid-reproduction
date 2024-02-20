# orchid-reproduction

Reuseable repo for orchid issue reproduction

> This repo need [bun](https://bun.sh/) to run test.

> The default database url is: `postgresql://postgres:password@127.0.0.1:5432/orchid-reproduction`

## issue-222

https://github.com/romeerez/orchid-orm/issues/222

```shell
# migrate
bun run src/issue-222/script.ts migrate

# test
bun test src/issue-222/issue.spec.ts --preload ./src/issue-222/test-setup.ts
```
