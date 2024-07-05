// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePackageTypeDto {

  @IsNumber()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  package_type: string;

  @IsString()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  description?: string;


  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  active?: boolean = false;
}
