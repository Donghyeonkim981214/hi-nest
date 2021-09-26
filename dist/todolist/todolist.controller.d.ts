import { TodolistService } from './todolist.service';
import { Todolist } from './entities/todolist.entitiy';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TodolistController {
    private todolistService;
    constructor(todolistService: TodolistService);
    findAll(): Promise<Todolist[]>;
    findOne(taskId: string): Promise<Todolist>;
    saveTask(task: CreateTaskDto): Promise<string>;
    deleteUser(taskId: string): Promise<string>;
}
