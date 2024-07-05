import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BranchesService } from './branches.service';
import { CreateBranchDto } from './dto/branch/create-branch.dto';
import { UpdateBranchDto } from './dto/branch/update-branch.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {  BranchEntity } from './entities/branch.entity';

@Controller('branches')
@ApiTags('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Post()
  @ApiCreatedResponse({ type: BranchEntity })
  create(@Body() createArticleDto: CreateBranchDto) {
    return this.branchesService.create(createArticleDto);
  }

  @Get()
  @ApiOkResponse({ type: BranchEntity, isArray: true })
  findAll() {
    return this.branchesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BranchEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.branchesService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: BranchEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBranchDto: UpdateBranchDto,
  ) {
    return this.branchesService.update(id, updateBranchDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: BranchEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.branchesService.remove(id);
  }
}
