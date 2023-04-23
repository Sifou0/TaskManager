import { Prisma } from '@prisma/client'
import { ITaskRepository, TaskCreateRaw, TaskRaw, TaskUpdateRaw } from '../../../../contexts/task'
import { Task } from '../../../../contexts/task/domains'
import { RelationalDatabase } from '../../database'
import { toTaskRaw } from './task.mapper'

export class TaskRepository implements ITaskRepository {
  constructor(private readonly database: RelationalDatabase) { }

  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.database.client.task.findMany({ include: { tags: true } })
    return tasks.map(toTaskRaw)
  }
  async addTask(task: TaskCreateRaw): Promise<TaskRaw> {
    task.isDone = false
    if (task.description == null) {
      task.description = ""
    }
    const newTask = await this.database.client.task.create({
      data: task, include: { tags: true }
    })
    return toTaskRaw(newTask)
  }

  async getTask(id: string): Promise<Task | null> {
    const task = await this.database.client.task.findUnique({ where: { id }, include: { tags: true } })
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
  async updateTask(id: string, task: TaskCreateRaw): Promise<Task | null> {
    let taskN = await this.database.client.task.findUnique({ where: { id } })
    let taskUpdated = null
    if (taskN != null) {
      taskUpdated = await this.database.client.task.update({
        where: { id: taskN.id },
        data: task,
        include: { tags: true }
      })
    }
    if (taskUpdated) return toTaskRaw(taskUpdated)
    else return null
  }

  async updateTaskStatus(id: string): Promise<Task | null> {
    let task = await this.database.client.task.findUnique({ where: { id } })
    if (task != null) {
      task.isDone = !task.isDone
      const taskUpdated = await this.database.client.task.update({
        where: { id: task.id },
        data: task,
        include: { tags: true }
      })
      return toTaskRaw(taskUpdated)
    }
    return task
  }

}
