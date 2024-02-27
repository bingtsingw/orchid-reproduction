import { BaseTable } from '@/src/utils';
import { TableActivityMember } from './activity-member';

export class TableActivity extends BaseTable {
  public readonly table = 'activity';
  public readonly softDelete = true;

  public columns = this.setColumns((t) => ({
    ...t.baseColumns(),
  }));

  public relations = {
    members: this.hasMany(() => TableActivityMember, {
      required: true,
      primaryKey: 'id',
      foreignKey: 'activityId',
    }),
  };
}
