import { UserType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserTypeEntity implements UserType {
  @ApiProperty()
  id: number;

  @ApiProperty()
  user_type: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}