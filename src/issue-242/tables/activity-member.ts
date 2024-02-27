import { BaseTable } from '@/src/utils';
import { TableActivity } from './activity';
import { TableUser } from './user';

export class TableActivityMember extends BaseTable {
  public readonly table = 'activity_member';
  public readonly softDelete = true;

  public columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    activityId: t.varchar(),
    userId: t.varchar(),
  }));

  public relations = {
    activity: this.belongsTo(() => TableActivity, {
      required: true,
      primaryKey: 'id',
      foreignKey: 'activityId',
    }),

    user: this.belongsTo(() => TableUser, {
      required: true,
      primaryKey: 'id',
      foreignKey: 'userId',
    }),
  };
}
