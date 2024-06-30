import { BaseTable } from '@/src/utils';
import { TableActivity } from './activity';

export class TableActivityMember extends BaseTable {
  public override readonly table = 'activity_member';
  public readonly softDelete = true;

  public override columns = this.setColumns((t) => ({
    ...t.baseColumns(),

    activityId: t.varchar(),
  }));

  public relations = {
    activity: this.belongsTo(() => TableActivity, {
      required: true,
      columns: ['activityId'],
      references: ['id'],
    }),
  };
}
