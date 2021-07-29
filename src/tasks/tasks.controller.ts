import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  getAllTasks(): string {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(): string {
    return this.tasksService.createTask();
  }

  @Patch()
  updateTask(): string {
    return this.tasksService.updateTask();
  }

  @Delete()
  deleteTask(): string {
    return this.tasksService.deleteTask();
  }
}
