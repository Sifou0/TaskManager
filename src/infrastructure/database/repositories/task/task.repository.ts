import { Prisma } from '@prisma/client'
import { ITaskRepository, TaskCreateRaw, TaskRaw } from '../../../../contexts/task'
import { Task, TaskCreate } from '../../../../contexts/task/domains'
import { RelationalDatabase } from '../../database'
import { toTaskRaw } from './task.mapper'

export class TaskRepository implements ITaskRepository {
  constructor(private readonly database: RelationalDatabase) { }

  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.database.client.task.findMany()
    return tasks.map(toTaskRaw)
  }
  async addTask(task: TaskCreateRaw): Promise<TaskRaw> {
    if (task.description == null) {
      task.description = ""
    }
    const newTask = await this.database.client.task.create({
      data: task
    })
    return toTaskRaw(newTask)
  }
  async getTask(id: string): Promise<Task | null> {
    const task = await this.database.client.task.findUnique({ where: { id } })
    return task ? toTaskRaw(task) : null
  }
  async deleteTask(id: string): Promise<void> {
    try {
      await this.database.client.task.delete({ where: { id } })
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError) || error.code !== 'P2025') {
        throw error
      }
    }
  }
  async updateTask(task: Task): Promise<Task> {
    const taskUpdated = await this.database.client.task.update({
      where: { id: task.id },
      data: task,
    })
    return toTaskRaw(taskUpdated)
  }

  //TODO: to complete

}
