export type Task = {
    id: string
    title: string
    description: string
    priority: string
}

export type TaskCreate = Omit<Task, 'id'>