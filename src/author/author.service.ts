import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  async findAll() {
    return this.prisma.author.findMany({ include: { book: true } });
  }

  async findOne(id: number) {
    return this.prisma.author.findUnique({
      where: { id },
      include: { book: true },
    });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.prisma.author.update({
      where: { id },
      data: updateAuthorDto,
    });
  }

  async remove(id: number) {
    return this.prisma.author.delete({
      where: { id },
    });
  }
}
