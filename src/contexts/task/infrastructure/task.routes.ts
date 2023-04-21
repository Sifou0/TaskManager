import { Router } from 'express'
import { TaskController } from './controller'

export function taskRoutes(controller: TaskController): Router {
  const router = Router()

  router.get('/', controller.getTasks.bind(controller))

  router.post('/', controller.getTask.bind(controller))

  return router
}
