import { Router } from 'express'
import { TaskRepository, RelationalDatabase } from '../../../infrastructure/database'
import { taskRoutes } from './task.routes'
import { TaskController } from './controller'
import { GetTasksUseCase } from '../use-cases'

export type TaskExternalDependencies = {
  database: RelationalDatabase
}

export const taskInjector = (externalDependencies: TaskExternalDependencies): Router => {
  const taskRepository = new TaskRepository(externalDependencies.database)

  const getTasksUseCase = new GetTasksUseCase(taskRepository)

  // const taskController = new TaskController(getTasksUseCase)

  return taskRoutes(taskController)
}
