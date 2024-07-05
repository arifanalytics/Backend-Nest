import { PartialType } from '@nestjs/swagger';
import { CreateUserTypeDto } from './create-usertype.dto';

export class UpdateUserTypeDto extends PartialType(CreateUserTypeDto) {}
