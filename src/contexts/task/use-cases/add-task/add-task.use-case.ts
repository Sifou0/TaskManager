import { Task, TaskCreate } from "../../domains";
import { ITaskRepository } from "../../infrastructure";

export class addTaskUseCase {
    constructor(private taskRepository: ITaskRepository) { }

    async execute(task: TaskCreate): Promise<Task> {
        return this.taskRepository.addTask(task)
    }
}