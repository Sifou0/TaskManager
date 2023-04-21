import { Router } from 'express'
import { TaskController } from './controller'

export function taskRoutes(controller: TaskController): Router {
  const router = Router()

  router.get('/:id', controller.getTask.bind(controller))

  router.get('/', controller.getTasks.bind(controller))

  router.post('/', controller.addTask.bind(controller))

  router.delete('/:id', controller.deleteTask.bind(controller))

  router.put('/:id', controller.updateTask.bind(controller))

  router.get('/sort', controller.getTasks.bind(controller))

  return router
}
