import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Event } from '../event/event.entity';
import { User } from '../user/user.entity';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Event, (event) => event.id, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  event: Event;

  @Column({ type: 'text' })
  message: string;

  @Column({
    type: 'enum',
    enum: ['unread', 'read', 'dismissed'],
    default: 'unread',
  })
  status: 'unread' | 'read' | 'dismissed';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
