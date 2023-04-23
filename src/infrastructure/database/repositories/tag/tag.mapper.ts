import { Tag, Task } from "@prisma/client";
import { TagRaw } from "../../../../contexts/tag/infrastructure";
import { toTaskRaw } from "../task/task.mapper";


export function toTagRaw(tag: Tag & { tasks: Task[] }): TagRaw {
    return {
        id: tag.id,
        title: tag.title,
        tasks: tag.tasks.map(toTaskRaw)
    }
}