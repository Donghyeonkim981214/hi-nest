import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Todolist } from './entities/todolist.entitiy';
export declare class TodolistService {
    private TodolistRepository;
    constructor(TodolistRepository: Repository<Todolist>);
    taskAll(): Promise<Todolist[]>;
    taskOne(id: string): Promise<Todolist>;
    remove(id: string): Promise<void>;
    createTask(task: CreateTaskDto): Promise<void>;
}
