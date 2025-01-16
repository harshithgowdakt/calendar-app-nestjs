import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RecurrenceRule } from './recurrence-rule.entity';

@Injectable()
export class RecurrenceRuleService {
  constructor(
    @InjectRepository(RecurrenceRule)
    private recurrenceRuleRepository: Repository<RecurrenceRule>,
  ) {}

  findAll() {
    return this.recurrenceRuleRepository.find({ relations: ['event'] });
  }

  findOne(id: string) {
    return this.recurrenceRuleRepository.findOne({
      where: { id },
      relations: ['event'],
    });
  }

  create(data: Partial<RecurrenceRule>) {
    return this.recurrenceRuleRepository.save(data);
  }

  async update(id: string, data: Partial<RecurrenceRule>) {
    await this.recurrenceRuleRepository.update(id, data);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.recurrenceRuleRepository.delete(id);
  }
}
