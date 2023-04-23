import { Router } from 'express'
import { tagController } from './controller'

export function tagRoutes(controller: tagController): Router {
    const router = Router()
    router.get('/', controller.getAllTags.bind(controller))
    router.post('/', controller.addTag.bind(controller))
    return router
}