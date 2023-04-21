import { Request, Response } from 'express'
import { GetTaskUseCase } from '../../use-cases/get-task'
import { GetTasksUseCase } from '../../use-cases/get-tasks'
import { addTaskUseCase } from '../../use-cases/add-task'
import { deleteTaskUseCase } from '../../use-cases/delete-task'
import { updateTaskUseCase } from '../../use-cases/update-task'
import { ValidationError, validate } from 'jsonschema'
import { ValidatorResult } from 'jsonschema'
import { TaskNotFoundError } from '../i-task-repository'
import { internal, notFound } from '../../../../infrastructure'

const TaskCreateSchema = {
  id: "/Task",
  type: "object",
  properties: {
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    priority: {
      type: "int"
    }
  },
  required: ["title"]
}

export class TaskController {
  constructor(
    private readonly getTasksUseCase: GetTasksUseCase,
    private readonly addTaskUseCase: addTaskUseCase,
    private readonly deleteTaskUseCase: deleteTaskUseCase,
    private readonly updateTaskUseCase: updateTaskUseCase,
    private readonly getTaskUseCase: GetTaskUseCase
  ) { }

  async addTask(req: Request, res: Response) {
    const result = validate(req.body, TaskCreateSchema)
    if (!result.valid) {
      const errors = result.errors.map((error: ValidationError) => {
        return {
          message: error.message
        }
      })
      return res.status(400).json(errors)
    }
    const task = await this.addTaskUseCase.execute(req.body)
    return res.status(201).json(task)
  }

  async getTasks(req: Request, res: Response) {
    const tasks = await this.getTasksUseCase.execute()
    res.status(200).json(tasks)
  }

  async getTask(req: Request, res: Response) {
    try {
      const task = await this.getTaskUseCase.execute(req.params.id)
      res.status(200).json(task)
    } catch (error) {
      // à faire idéalement dans chaque fonction (voir à faire une mise en commmun)
      const httpResponse = convertErrorsToHttpResponse(error)
      res.status(httpResponse.status).json(httpResponse.body)
    }
  }

  async deleteTask(req: Request, res: Response) {
    const task = await this.deleteTaskUseCase.execute(req.params.id)
    res.status(200).json(task)
  }

  async updateTask(req: Request, res: Response) {
    const task = await this.updateTaskUseCase.execute(req.params.id, req.body)
    return res.status(200).json(task)
  }
}


function convertErrorsToHttpResponse(error: unknown) {
  // https://www.baeldung.com/rest-api-error-handling-best-practices
  if (error instanceof TaskNotFoundError) {
    return notFound({ message: error.message, code: 'book-not-found', data: { id: error.id } })
  }
  return internal()
}