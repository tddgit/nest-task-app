import { TaskStatus } from '../tasks/task.model';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
