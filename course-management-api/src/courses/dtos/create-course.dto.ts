import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty({ message: 'Course name is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Course code is required' })
  code: string;

  @IsString()
  @IsNotEmpty({ message: 'Instructor name is required' })
  instructor: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'Credits must be a number' })
  @Min(1, { message: 'Credits must be at least 1' })
  @Max(6, { message: 'Credits cannot be greater than 6' })
  credits: number;

  @IsOptional()
  @IsString()
  description?: string;
}