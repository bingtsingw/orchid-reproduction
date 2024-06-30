import { BaseTable } from '@/src/utils';
import { TableActivityMember } from './activity-member';
import { TableCity } from './city';

export class TableActivity extends BaseTable {
  public override readonly table = 'activity';
  public readonly softDelete = true;

  public override columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    cityId: t.varchar(),
  }));

  public relations = {
    city: this.belongsTo(() => TableCity, {
      required: false,
      columns: ['cityId'],
      references: ['id'],
    }),

    members: this.hasMany(() => TableActivityMember, {
      required: true,
      columns: ['id'],
      references: ['activityId'],
    }),
  };
}
