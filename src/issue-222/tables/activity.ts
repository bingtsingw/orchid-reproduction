import { BaseTable } from '@/src/utils';
import { TableActivityMember } from './activity-member';
import { TableCity } from './city';

export class TableActivity extends BaseTable {
  public readonly table = 'activity';
  public readonly softDelete = true;

  public columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    cityId: t.varchar(),
  }));

  public relations = {
    city: this.belongsTo(() => TableCity, {
      required: false,
      primaryKey: 'id',
      foreignKey: 'cityId',
    }),

    members: this.hasMany(() => TableActivityMember, {
      required: true,
      primaryKey: 'id',
      foreignKey: 'activityId',
    }),
  };
}
