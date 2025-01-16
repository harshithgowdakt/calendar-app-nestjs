import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Event } from '../event/event.entity';

@Entity('recurrence_rules')
export class RecurrenceRule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Event, (event) => event.id, { onDelete: 'CASCADE' })
  event: Event;

  @Column({ type: 'enum', enum: ['daily', 'weekly', 'monthly', 'yearly'] })
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';

  @Column({ type: 'int', default: 1 })
  interval: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  daysOfWeek: string;

  @Column({ type: 'timestamp', nullable: true })
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
