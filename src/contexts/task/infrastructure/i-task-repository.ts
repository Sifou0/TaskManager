import { Task, TaskCreate } from '../domains/types';
export * from '../domains/errors';

export type TaskRaw = Task
export type TaskCreateRaw = TaskCreate

export interface ITaskRepository {
  getAllTasks(): Promise<TaskRaw[]>
  addTask(task: TaskCreateRaw): Promise<TaskRaw>
  getTask(id: string): Promise<TaskRaw | null>
  deleteTask(id: string): Promise<void>
  updateTask(task: TaskCreateRaw): Promise<TaskRaw>
}