import { Task } from "./task"

export type Tag = {
    id: string,
    title: string
    taskId: string
}

export type TagCreate = Omit<Tag, 'id'>