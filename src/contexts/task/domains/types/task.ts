import { Tag } from "@prisma/client"

export type Task = {
    id: string
    title: string
    description: string
    priority: number
    isDone: boolean
    tags: Tag[]
}
export type TaskCreate = Omit<Task, 'id' | 'tags'>
export type TaskUpdate = Omit<Task, 'tags'>

