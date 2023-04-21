import { ITaskRepository, TaskCreateRaw, TaskRaw } from '../../../../contexts/task'
import { Task, TaskCreate } from '../../../../contexts/task/domains'
import { RelationalDatabase } from '../../database'
import { toTaskRaw } from './task.mapper'

export class TaskRepository implements ITaskRepository {
  constructor(private readonly database: RelationalDatabase) { }

  async getAllTasks(): Promise<Task[]> {
    throw new Error('Method not implemented.')
  }
  async addTask(task: TaskCreateRaw): Promise<TaskRaw> {
    const newTask = await this.database.client.task.create({
      data: task
    })
    return toTaskRaw(newTask)
  }
  async getTask(id: string): Promise<Task | null> {
    throw new Error('Method not implemented.')
  }
  async deleteTask(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async updateTask(task: Task): Promise<Task> {
    throw new Error('Method not implemented.')
  }

  //TODO: to complete

}
