import { Tag, TagCreate } from "../domains/types"

export type TagRaw = Tag
export type TagCreateRaw = TagCreate

export interface ITagRepository {
    getAllTags(): Promise<TagRaw[]>
    addTag(Tag: TagCreateRaw): Promise<TagRaw>
}