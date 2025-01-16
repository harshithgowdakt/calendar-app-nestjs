import { Test, TestingModule } from '@nestjs/testing';
import { EventParticipantController } from './event-participant.controller';

describe('EventParticipantController', () => {
  let controller: EventParticipantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventParticipantController],
    }).compile();

    controller = module.get<EventParticipantController>(EventParticipantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
