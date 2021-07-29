import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks(): string {
    return 'Getting.All.Tasks';
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
