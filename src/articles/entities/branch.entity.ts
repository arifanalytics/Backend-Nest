import { Branch } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BranchEntity implements Branch {
  @ApiProperty()
  id: number;

  @ApiProperty()
  branch_name: string;

  @ApiProperty({ required: false, nullable: true })
  address: string | null;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  company_id: number;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}