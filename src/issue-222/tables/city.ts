import { BaseTable } from '@/src/utils';
import { TableActivity } from './activity';

export class TableCity extends BaseTable {
  public readonly table = 'city';

  public columns = this.setColumns((t) => ({
    ...t.baseColumns(),
  }));

  public relations = {
    activities: this.hasMany(() => TableActivity, {
      required: true,
      primaryKey: 'id',
      foreignKey: 'cityId',
    }),
  };
}
