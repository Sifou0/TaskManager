import { Task, TaskCreate } from "../../domains";
import { ITaskRepository } from "../../infrastructure";

export class deleteTaskUseCase {
    constructor(private taskRepository: ITaskRepository) { }

    async execute(id: string): Promise<void> {
        this.taskRepository.deleteTask(id)
    }
}