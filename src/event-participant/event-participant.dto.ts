import {
  IsString,
  IsNotEmpty,
  IsBoolean,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class CreateEventParticipantDto {
  @IsString()
  @IsNotEmpty()
  eventId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(['invited', 'accepted', 'declined', 'tentative'])
  @IsOptional()
  status?: 'invited' | 'accepted' | 'declined' | 'tentative';

  @IsBoolean()
  @IsOptional()
  notificationSent?: boolean;
}

export class UpdateEventParticipantDto {
  @IsEnum(['invited', 'accepted', 'declined', 'tentative'])
  status?: 'invited' | 'accepted' | 'declined' | 'tentative';

  @IsBoolean()
  notificationSent?: boolean;
}
