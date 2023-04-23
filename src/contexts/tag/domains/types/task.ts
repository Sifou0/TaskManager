import { Tag } from "@prisma/client"

export type Task = {
    id: string
    title: string
    description: string
    priority: number
    isDone: boolean
    tags: Tag[]
}