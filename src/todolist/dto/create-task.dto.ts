import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly task: string;
}