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

export class CreateBranchDto {

  @IsNumber()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  branch_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  branch_email: string;
  
  @IsString()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  address?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  company_id: number;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  active?: boolean = false;
}
