import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodolistService } from './todolist.service';
import { TodolistController } from './todolist.controller';
import { Todolist } from './entities/todolist.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([Todolist])],
  providers: [TodolistService],
  controllers: [TodolistController],
})
export class TodolistModule {}
