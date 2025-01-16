import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export class CreateCalendarDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(['public', 'private', 'shared'])
  @IsOptional()
  visibility?: 'public' | 'private' | 'shared';
}

export class UpdateCalendarDto {
  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsEnum(['public', 'private', 'shared'])
  visibility?: 'public' | 'private' | 'shared';
}
