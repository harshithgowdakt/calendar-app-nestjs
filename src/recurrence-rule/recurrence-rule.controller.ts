import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import {
  CreateRecurrenceRuleDto,
  UpdateRecurrenceRuleDto,
} from './recurrence-rule.dto';
import { RecurrenceRuleService } from './recurrence-rule.service';

@Controller('recurrence-rules')
export class RecurrenceRuleController {
  constructor(private readonly recurrenceRuleService: RecurrenceRuleService) {}

  @Get()
  findAll() {
    return this.recurrenceRuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recurrenceRuleService.findOne(id);
  }

  @Post()
  create(@Body() createRecurrenceRuleDto: CreateRecurrenceRuleDto) {
    return this.recurrenceRuleService.create(createRecurrenceRuleDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecurrenceRuleDto: UpdateRecurrenceRuleDto,
  ) {
    return this.recurrenceRuleService.update(id, updateRecurrenceRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recurrenceRuleService.remove(id);
  }
}
