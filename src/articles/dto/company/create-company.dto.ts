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

export class CreateCompanyDto {

  @IsNumber()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  company_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  company_email: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  company_type: number;
  
  @IsString()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  address?: string;


  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  active?: boolean = false;
}
