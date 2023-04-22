export type Tag = {
    id: string,
    title: string
}

export type TagCreate = Omit<Tag, 'id'>