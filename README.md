# orchid-reproduction

Reuseable repo for orchid issue reproduction

> This repo need [bun](https://bun.sh/) to run test.

> The default database url is: `postgresql://postgres:password@127.0.0.1:5432/orchid-reproduction`

## issue-311

https://github.com/romeerez/orchid-orm/issues/311

```shell
# migrate
bun run src/issue-311/script.ts migrate

# test
bun test src/issue-311/issue.spec.ts --preload ./src/issue-311/test-setup.ts
```

<details>
<summary>DONE</summary>

## issue-247

https://github.com/romeerez/orchid-orm/issues/247

```shell
# migrate
bun run src/issue-247/script.ts migrate

# test
bun test src/issue-247/issue.spec.ts --preload ./src/issue-247/test-setup.ts
```

## issue-242

https://github.com/romeerez/orchid-orm/issues/242

```shell
# migrate
bun run src/issue-242/script.ts migrate

# test
bun test src/issue-242/issue.spec.ts --preload ./src/issue-242/test-setup.ts
```

## issue-222

https://github.com/romeerez/orchid-orm/issues/222

```shell
# migrate
bun run src/issue-222/script.ts migrate

# test
bun test src/issue-222/issue.spec.ts --preload ./src/issue-222/test-setup.ts
```

</details>

## Reuse

```shell
bun run src/issue-xxx/script.ts reset
```
