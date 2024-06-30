import { BaseTable } from '@/src/utils';
import { TableActivityMember } from './activity-member';

export class TableActivity extends BaseTable {
  public override readonly table = 'activity';
  public readonly softDelete = true;

  public override columns = this.setColumns((t) => ({
    ...t.baseColumns(),
  }));

  public relations = {
    members: this.hasMany(() => TableActivityMember, {
      required: true,
      columns: ['id'],
      references: ['activityId'],
    }),
  };
}
