import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarModule } from './calendar/calendar.module';
import { EventModule } from './event/event.module';
import { EventParticipantModule } from './event-participant/event-participant.module';
import { NotificationModule } from './notification/notification.module';
import { RecurrenceRuleModule } from './recurrence-rule/recurrence-rule.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    CalendarModule,
    EventModule,
    NotificationModule,
    RecurrenceRuleModule,
    EventParticipantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
