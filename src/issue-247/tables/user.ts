import { BaseTable } from '@/src/utils';

export class TableUser extends BaseTable {
  public readonly table = 'user';

  public columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    vip: t.json<{ to?: string }>().default({}),
    active: t.boolean().default(() => true),
  }));
}
