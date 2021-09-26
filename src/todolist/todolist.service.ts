import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Todolist } from './entities/todolist.entitiy';

@Injectable()
export class TodolistService {
  constructor(
    @InjectRepository(Todolist)
    private TodolistRepository: Repository<Todolist>,
  ) {}

  taskAll(): Promise<Todolist[]> {
    return this.TodolistRepository.find();
  }
    
  taskOne(id: string): Promise<Todolist> {
    return this.TodolistRepository.findOne(id);
  }
    
  async remove(id: string): Promise<void> {
    await this.TodolistRepository.delete(id);
  }

  async createTask(task: CreateTaskDto): Promise<void> {
    await this.TodolistRepository.save(task);
  }

  /* update(id: string, UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  } */
}
