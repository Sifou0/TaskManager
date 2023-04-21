import { Router } from 'express'
import { TaskRepository, RelationalDatabase } from '../../../infrastructure/database'
import { taskRoutes } from './task.routes'
import { TaskController } from './controller'
import { GetTasksUseCase } from '../use-cases/get-tasks'
import { GetTaskUseCase } from '../use-cases/get-task'
import { addTaskUseCase } from '../use-cases/add-task'
import { deleteTaskUseCase } from '../use-cases/delete-task'
import { updateTaskUseCase } from '../use-cases/update-task'

export type TaskExternalDependencies = {
  database: RelationalDatabase
}

export const taskInjector = (externalDependencies: TaskExternalDependencies): Router => {
  const taskRepository = new TaskRepository(externalDependencies.database)

  const _getTasksUseCase = new GetTasksUseCase(taskRepository)
  const _addTaskUseCase = new addTaskUseCase(taskRepository)
  const _getTaskUseCase = new GetTaskUseCase(taskRepository)
  const _deleteTaskUseCase = new deleteTaskUseCase(taskRepository)
  const _updateTaskUseCase = new updateTaskUseCase(taskRepository)

  const taskController = new TaskController(
    _getTasksUseCase,
    _addTaskUseCase,
    _deleteTaskUseCase,
    _updateTaskUseCase,
    _getTaskUseCase,
  )

  return taskRoutes(taskController)
}
