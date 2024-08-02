import { BaseTable } from '@/src/utils';

export class TableUser extends BaseTable {
  public override readonly table = 'user';
  public readonly softDelete = true;

  public override columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    name: t.string().nullable(),
  }));
}
