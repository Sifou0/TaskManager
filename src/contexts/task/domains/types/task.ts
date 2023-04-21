export type Task = {
    id: string
    title: string
    description: string
    priority: number
}

export type TaskCreate = Omit<Task, 'id'>