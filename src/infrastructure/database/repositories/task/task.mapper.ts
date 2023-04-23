import { TaskRaw } from "../../../../contexts/task";
import { Task, Tag } from "@prisma/client";
import { toTagRaw } from "../tag";

// TODO: use real types
export function toTaskRaw(task: Task & { tags: Tag[] }): TaskRaw {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    priority: task.priority,
    isDone: task.isDone,
    tags: task.tags.map(toTagRaw)
  }
}
