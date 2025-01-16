import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsInt,
} from 'class-validator';

export class CreateRecurrenceRuleDto {
  @IsString()
  @IsNotEmpty()
  eventId: string;

  @IsEnum(['daily', 'weekly', 'monthly', 'yearly'])
  @IsNotEmpty()
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';

  @IsInt()
  @IsOptional()
  interval?: number;

  @IsString()
  @IsOptional()
  daysOfWeek?: string;

  @IsOptional()
  endDate?: Date;
}

export class UpdateRecurrenceRuleDto {
  @IsEnum(['daily', 'weekly', 'monthly', 'yearly'])
  frequency?: 'daily' | 'weekly' | 'monthly' | 'yearly';

  @IsInt()
  interval?: number;

  @IsString()
  daysOfWeek?: string;

  @IsOptional()
  endDate?: Date;
}
