import { Task, TaskCreate } from '../domains/types';
export * from '../domains/errors';

export type TaskRaw = Task
export type TaskCreateRaw = TaskCreate

export interface ITaskRepository {
  getAllTasks(): Promise<TaskRaw[]>
  addTask(book: TaskCreateRaw): Promise<TaskRaw>
  getTask(id: string): Promise<TaskRaw | null>
  deleteTask(id: string): Promise<void>
  updateTask(task: TaskRaw): Promise<TaskRaw>
}