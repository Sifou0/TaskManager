import { Router } from 'express'
import { TaskExternalDependencies, taskInjector } from '../contexts/task/infrastructure/task.injector'

export type ExternalDependencies = TaskExternalDependencies

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRoutes: GetRoutes = (externalDependencies: ExternalDependencies): Router[] => {
  // Main routes
  return [
    Router().use('/task', taskInjector(externalDependencies))
  ]
}

export type GetRoutes = (externalDependencies: ExternalDependencies) => Router[]
