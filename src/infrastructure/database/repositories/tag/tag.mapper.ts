import { Tag, Task } from "@prisma/client";
import { TagRaw } from "../../../../contexts/tag/infrastructure";
import { toTaskRaw } from "../task/task.mapper";


export function toTagRaw(tag: Tag): TagRaw {
    return {
        id: tag.id,
        title: tag.title,
        taskId: tag.taskId
    }
}