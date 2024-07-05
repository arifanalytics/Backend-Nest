import { PartialType } from '@nestjs/swagger';
import { CreatePackageTypeDto } from './create-packagetype.dto';

export class UpdatePackageTypeDto extends PartialType(CreatePackageTypeDto) {}
