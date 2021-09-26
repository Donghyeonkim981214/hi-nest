import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Patch,
    Body,
    Query,
  } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { Todolist } from './entities/todolist.entitiy';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('todolist')
export class TodolistController {

  constructor(
    private todolistService: TodolistService
  ) {
    this.todolistService = todolistService;
  }

  @Get('list')
  async findAll(): Promise<Todolist[]> {
    const taskList = await this.todolistService.taskAll();
    return Object.assign({
      data: taskList,
      statusCode: 200,
      statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
    });
  }

  @Get(':id')
  async findOne(@Param('id') taskId: string): Promise<Todolist> {
    const foundTask = await this.todolistService.taskOne(taskId);
    return Object.assign({
      data: foundTask,
      statusCode: 200,
      statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
    });
  }

  @Post()
  async saveTask(@Body() task: CreateTaskDto): Promise<string> {
    await this.todolistService.createTask(task);
    return Object.assign({
      data: { ...task },
      statusCode: 201,
      statusMsg: `saved successfully`,
    });
  }
  @Delete(':id')
  async deleteUser(@Param('id') taskId: string): Promise<string> {
    await this.todolistService.remove(taskId);
    return Object.assign({
      data: { taskId: taskId },
      statusCode: 201,
      statusMsg: `deleted successfully`,
    });
  }
}
