import { BaseTable } from '@/src/utils';
import { TableUser } from './user';

export class TableActivity extends BaseTable {
  public readonly table = 'activity';
  public readonly softDelete = true;

  public columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    userId: t.string(),
  }));

  public relations = {
    user: this.belongsTo(() => TableUser, {
      required: true,
      primaryKey: 'id',
      foreignKey: 'userId',
    }),
  };
}
