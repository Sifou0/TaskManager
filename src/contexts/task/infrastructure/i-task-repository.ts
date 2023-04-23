import { Task, TaskCreate, TaskUpdate } from '../domains/types';
export * from '../domains/errors';

export type TaskRaw = Task
export type TaskCreateRaw = TaskCreate
export type TaskUpdateRaw = TaskUpdate

export interface ITaskRepository {
  getAllTasks(): Promise<TaskRaw[]>
  addTask(task: TaskCreateRaw): Promise<TaskRaw>
  getTask(id: string): Promise<TaskRaw | null>
  deleteTask(id: string): Promise<void>
  updateTask(id: string, task: TaskCreateRaw): Promise<TaskRaw | null>
  updateTaskStatus(id: string): Promise<TaskRaw | null>
}