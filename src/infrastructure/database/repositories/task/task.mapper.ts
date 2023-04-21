import { TaskRaw } from "../../../../contexts/task";
import { Task } from "@prisma/client";

// TODO: use real types
export function toTaskRaw(task: Task): TaskRaw {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    priority: task.priority
  }
}
