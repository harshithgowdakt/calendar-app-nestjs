import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EventParticipant } from './event-participant.entity';

@Injectable()
export class EventParticipantService {
  constructor(
    @InjectRepository(EventParticipant)
    private participantRepository: Repository<EventParticipant>,
  ) {}

  findAll() {
    return this.participantRepository.find({ relations: ['event', 'user'] });
  }

  findOne(id: string) {
    return this.participantRepository.findOne({
      where: { id },
      relations: ['event', 'user'],
    });
  }

  create(data: Partial<EventParticipant>) {
    return this.participantRepository.save(data);
  }

  async update(id: string, data: Partial<EventParticipant>) {
    await this.participantRepository.update(id, data);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.participantRepository.delete(id);
  }
}
