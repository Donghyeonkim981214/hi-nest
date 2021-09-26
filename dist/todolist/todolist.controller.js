"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodolistController = void 0;
const common_1 = require("@nestjs/common");
const todolist_service_1 = require("./todolist.service");
const create_task_dto_1 = require("./dto/create-task.dto");
let TodolistController = class TodolistController {
    constructor(todolistService) {
        this.todolistService = todolistService;
        this.todolistService = todolistService;
    }
    async findAll() {
        const taskList = await this.todolistService.taskAll();
        return Object.assign({
            data: taskList,
            statusCode: 200,
            statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
        });
    }
    async findOne(taskId) {
        const foundTask = await this.todolistService.taskOne(taskId);
        return Object.assign({
            data: foundTask,
            statusCode: 200,
            statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
        });
    }
    async saveTask(task) {
        await this.todolistService.createTask(task);
        return Object.assign({
            data: Object.assign({}, task),
            statusCode: 201,
            statusMsg: `saved successfully`,
        });
    }
    async deleteUser(taskId) {
        await this.todolistService.remove(taskId);
        return Object.assign({
            data: { taskId: taskId },
            statusCode: 201,
            statusMsg: `deleted successfully`,
        });
    }
};
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodolistController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodolistController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TodolistController.prototype, "saveTask", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodolistController.prototype, "deleteUser", null);
TodolistController = __decorate([
    (0, common_1.Controller)('todolist'),
    __metadata("design:paramtypes", [todolist_service_1.TodolistService])
], TodolistController);
exports.TodolistController = TodolistController;
//# sourceMappingURL=todolist.controller.js.map