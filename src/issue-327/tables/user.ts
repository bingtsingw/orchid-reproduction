import { BaseTable } from '@/src/utils';

export class TableUser extends BaseTable {
  public override readonly table = 'user';

  public override columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    vipInCamel: t.json<{ to?: string }>().default({}),
    vip_in_dash: t.json<{ to?: string }>().default({}),
    active: t.boolean().default(() => true),
  }));
}
