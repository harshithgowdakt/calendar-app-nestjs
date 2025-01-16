import { Test, TestingModule } from '@nestjs/testing';
import { RecurrenceRuleService } from './recurrence-rule.service';

describe('RecurrenceRuleService', () => {
  let service: RecurrenceRuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecurrenceRuleService],
    }).compile();

    service = module.get<RecurrenceRuleService>(RecurrenceRuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
