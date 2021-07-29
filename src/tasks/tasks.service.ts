import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(): string {
    return 'Create.New.Task';
  }

  updateTask(): string {
    return 'Update.Task';
  }

  deleteTask(): string {
    return 'Delete.A.Task';
  }
}
