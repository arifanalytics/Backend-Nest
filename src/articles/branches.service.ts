import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBranchDto } from './dto/branch/create-branch.dto';
import { UpdateBranchDto } from './dto/branch/update-branch.dto';

@Injectable()
export class BranchesService {
  constructor(private prisma: PrismaService) {}

  create(createBranchDto: CreateBranchDto) {
    return this.prisma.branch.create({ data: createBranchDto });
  }

  findAll() {
    return this.prisma.branch.findMany({ where: { status: true } });
  }

  findOne(id: number) {
    return this.prisma.branch.findUnique({ where: { id } });
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return this.prisma.branch.update({
      where: { id },
      data: updateBranchDto,
    });
  }

  remove(id: number) {
    return this.prisma.branch.delete({ where: { id } });
  }
}
