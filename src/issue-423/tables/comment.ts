import { BaseTable } from '@/src/utils';

export class TableComment extends BaseTable {
  public override readonly table = 'comment';
  public readonly softDelete = true;

  public override columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    rootId: t.string().nullable(),
  }));

  public relations = {
    subcomments: this.hasMany(() => TableComment, {
      required: false,
      columns: ['id'],
      references: ['rootId'],
    }),
  };
}
