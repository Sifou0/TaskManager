import { Task } from '../../domains/types';
import { ITaskRepository, TaskNotFoundError } from '../../infrastructure'

export class GetTaskUseCase {
  constructor(private TaskRepository: ITaskRepository) { }

  //async execute(): Promise<Task[]> {
  async execute(id: string): Promise<Task | null> {
    const book = await this.TaskRepository.getTask(id)
    if (!book) {
      throw new TaskNotFoundError(id)
    } else {
      return book
    }
  }
}
