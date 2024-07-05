// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserTypeDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  usertype: string;
  
  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  active?: boolean = false;
}
