import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  findAll() {
    return this.eventRepository.find({ relations: ['calendar'] });
  }

  findOne(id: string) {
    return this.eventRepository.findOne({
      where: { id: id },
      relations: ['calendar'],
    });
  }

  create(data: Partial<Event>) {
    return this.eventRepository.save(data);
  }

  async update(id: string, data: Partial<Event>) {
    await this.eventRepository.update(id, data);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.eventRepository.delete(id);
  }
}
