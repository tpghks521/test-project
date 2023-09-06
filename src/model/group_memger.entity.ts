// groupMember.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { User } from './user.entity';
import { Group } from './group.entity';

@Entity()
export class GroupMember {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.groupMembers)
  user: User;

  @ManyToOne(() => Group, (group) => group.groupMembers)
  group: Group;

  @Column()
  role: string;
}
