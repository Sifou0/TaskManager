import { Task } from '../../domains'
import { ITaskRepository } from '../../infrastructure'

export class GetTasksUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  //async execute(): Promise<Task[]> {
  async execute(): Promise<Task[]> {
    return this.TaskRepository.getAllTasks()

  }
}
