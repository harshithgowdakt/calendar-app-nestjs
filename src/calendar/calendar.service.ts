import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Calendar } from './calendar.entity';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Calendar)
    private calendarRepository: Repository<Calendar>,
  ) {}

  findAll() {
    return this.calendarRepository.find({ relations: ['user'] });
  }

  findOne(id: string) {
    return this.calendarRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });
  }

  create(data: Partial<Calendar>) {
    return this.calendarRepository.save(data);
  }

  async update(id: string, data: Partial<Calendar>) {
    await this.calendarRepository.update(id, data);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.calendarRepository.delete(id);
  }
}
