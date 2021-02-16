import { Injectable } from '@nestjs/common';
import { TaksStatus, Task } from './task.model';
import * as uuid from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task: Task = {
      id: uuid.v1(),
      title,
      description,
      status: TaksStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
