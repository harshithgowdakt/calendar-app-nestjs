import { Test, TestingModule } from '@nestjs/testing';

import { RecurrenceRuleController } from './recurrence-rule.controller';

describe('RecurrenceRuleController', () => {
  let controller: RecurrenceRuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecurrenceRuleController],
    }).compile();

    controller = module.get<RecurrenceRuleController>(RecurrenceRuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
