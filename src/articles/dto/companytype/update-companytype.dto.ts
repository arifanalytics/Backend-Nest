import { PartialType } from '@nestjs/swagger';
import { CreateCompanyTypeDto } from './create-companytype.dto';

export class UpdateCompanyTypeDto extends PartialType(CreateCompanyTypeDto) {}
