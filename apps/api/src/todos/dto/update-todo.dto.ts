import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}
