import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsOptional()
  eventId?: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsEnum(['unread', 'read', 'dismissed'])
  @IsOptional()
  status?: 'unread' | 'read' | 'dismissed';
}

export class UpdateNotificationDto {
  @IsEnum(['unread', 'read', 'dismissed'])
  status?: 'unread' | 'read' | 'dismissed';
}
