import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}
