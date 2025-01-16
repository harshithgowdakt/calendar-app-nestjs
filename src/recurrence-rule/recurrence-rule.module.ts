import { Module } from '@nestjs/common';

import { RecurrenceRuleController } from './recurrence-rule.controller';
import { RecurrenceRuleService } from './recurrence-rule.service';

@Module({
  controllers: [RecurrenceRuleController],
  providers: [RecurrenceRuleService],
})
export class RecurrenceRuleModule {}
