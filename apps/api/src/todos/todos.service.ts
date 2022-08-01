import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    return await this.prisma.todo.create({
      data: createTodoDto,
    });
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.todo.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return await this.prisma.todo.update({
      where: {
        id,
      },
      data: updateTodoDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
