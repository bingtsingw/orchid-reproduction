import { BaseTable } from '@/src/utils';
import { TableActivity } from './activity';
import { TableUser } from './user';

export class TableActivityMember extends BaseTable {
  public override readonly table = 'activity_member';
  public readonly softDelete = true;

  public override columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    activityId: t.string(),
    userId: t.string(),
  }));

  public relations = {
    activity: this.belongsTo(() => TableActivity, {
      required: true,
      columns: ['activityId'],
      references: ['id'],
    }),

    user: this.belongsTo(() => TableUser, {
      required: true,
      columns: ['userId'],
      references: ['id'],
    }),
  };
}
