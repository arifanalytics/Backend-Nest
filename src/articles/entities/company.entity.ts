import { Company } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CompanyEntity implements Company {
  @ApiProperty()
  id: number;

  @ApiProperty()
  company_name: string;

  @ApiProperty({ required: false, nullable: true })
  address: string | null;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}