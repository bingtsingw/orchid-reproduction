import { BaseTable } from '@/src/utils';
import { TableActivity } from './activity';

export class TableCity extends BaseTable {
  public override readonly table = 'city';

  public override columns = this.setColumns((t) => ({
    ...t.baseColumns(),
  }));

  public relations = {
    activities: this.hasMany(() => TableActivity, {
      required: true,
      columns: ['id'],
      references: ['cityId'],
    }),
  };
}
