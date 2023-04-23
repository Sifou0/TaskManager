import { Router } from "express"
import { RelationalDatabase, TagRepository } from "../../../infrastructure"
import { addTagUseCase, getAllTagsUseCase } from "../use-cases"
import { tagController } from "./controller"
import { tagRoutes } from "./tag.routes"

export type TagExternalDependencies = {
    database: RelationalDatabase
}

export const tagInjector = (externalDependencies: TagExternalDependencies): Router => {
    const tagRepository = new TagRepository(externalDependencies.database)
    const _getTagsUseCase = new getAllTagsUseCase(tagRepository)
    const _addTagUseCase = new addTagUseCase(tagRepository)
    const _tagController = new tagController(_addTagUseCase, _getTagsUseCase)
    return tagRoutes(_tagController)
}