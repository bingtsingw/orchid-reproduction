import { BaseTable } from '@/src/utils';

export class TableUser extends BaseTable {
  public override readonly table = 'user';

  public override columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    profile: t.json<{ name?: string }>().default({}),
  }));
}
