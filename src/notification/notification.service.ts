import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Notification } from './notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
  ) {}

  findAll() {
    return this.notificationRepository.find({ relations: ['user', 'event'] });
  }

  findOne(id: string) {
    return this.notificationRepository.findOne({
      where: { id },
      relations: ['user', 'event'],
    });
  }

  create(data: Partial<Notification>) {
    return this.notificationRepository.save(data);
  }

  async update(id: string, data: Partial<Notification>) {
    await this.notificationRepository.update(id, data);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.notificationRepository.delete(id);
  }
}
