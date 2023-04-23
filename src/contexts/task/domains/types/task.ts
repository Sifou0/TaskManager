export type Task = {
    id: string
    title: string
    description: string
    priority: number
    isDone: boolean
    tagId: string
}
export type TaskCreate = Omit<Task, 'id'>
