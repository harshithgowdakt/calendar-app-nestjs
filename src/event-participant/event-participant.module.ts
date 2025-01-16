import { Module } from '@nestjs/common';

import { EventParticipantController } from './event-participant.controller';
import { EventParticipantService } from './event-participant.service';

@Module({
  controllers: [EventParticipantController],
  providers: [EventParticipantService],
})
export class EventParticipantModule {}
