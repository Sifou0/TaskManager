import { TaskRaw } from "../../../../contexts/task";
import { Tache } from "@prisma/client"

// TODO: use real types
export function toTaskRaw(task: Tache): TaskRaw {
  return {
    id: task.id,
    title: task.title,
    description: task.description
  }
}
