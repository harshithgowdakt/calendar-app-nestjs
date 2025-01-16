import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsDate,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  calendarId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsDate()
  @IsNotEmpty()
  startTime: Date;

  @IsDate()
  @IsNotEmpty()
  endTime: Date;

  @IsBoolean()
  @IsOptional()
  allDay?: boolean;

  @IsOptional()
  recurrenceRule?: Record<string, any>;
}

export class UpdateEventDto {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsString()
  location?: string;

  @IsDate()
  startTime?: Date;

  @IsDate()
  endTime?: Date;

  @IsBoolean()
  allDay?: boolean;

  @IsOptional()
  recurrenceRule?: Record<string, any>;
}
