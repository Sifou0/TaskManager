import { Task } from "./task"

export type Tag = {
    id: string,
    title: string
    tasks: Task[]
}

export type TagCreate = Omit<Tag, 'id' | 'tasks'>