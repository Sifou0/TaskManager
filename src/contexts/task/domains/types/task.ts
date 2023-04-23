export type Task = {
    id: string
    title: string
    description: string
    priority: number
    isDone: boolean
}

export type TaskCreate = Omit<Task, 'id'>
