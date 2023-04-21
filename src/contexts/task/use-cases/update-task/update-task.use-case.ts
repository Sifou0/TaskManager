import { Task, TaskCreate } from "../../domains";
import { ITaskRepository } from "../../infrastructure";

export class updateTaskUseCase {
    constructor(private taskRepository: ITaskRepository) { }

    async execute(id: string, task: Omit<TaskCreate, 'id'>): Promise<Task> {
        return this.taskRepository.updateTask(task)
    }
}