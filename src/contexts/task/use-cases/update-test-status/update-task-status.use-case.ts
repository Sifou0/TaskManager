import { Task, TaskCreate } from "../../domains";
import { ITaskRepository } from "../../infrastructure";

export class updateTaskStatusUseCase {
    constructor(private taskRepository: ITaskRepository) { }

    async execute(id: string): Promise<Task | null> {
        return this.taskRepository.updateTaskStatus(id)
    }
}