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
  CreateEventParticipantDto,
  UpdateEventParticipantDto,
} from './event-participant.dto';
import { EventParticipantService } from './event-participant.service';

@Controller('event-participants')
export class EventParticipantController {
  constructor(
    private readonly eventParticipantService: EventParticipantService,
  ) {}

  @Get()
  findAll() {
    return this.eventParticipantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventParticipantService.findOne(id);
  }

  @Post()
  create(@Body() createEventParticipantDto: CreateEventParticipantDto) {
    return this.eventParticipantService.create(createEventParticipantDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventParticipantDto: UpdateEventParticipantDto,
  ) {
    return this.eventParticipantService.update(id, updateEventParticipantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventParticipantService.remove(id);
  }
}
