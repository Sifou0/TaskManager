import { Tag, TagCreate } from "../../../../contexts/tag/domains/types";
import { ITagRepository, TagCreateRaw, TagRaw } from "../../../../contexts/tag/infrastructure";
import { RelationalDatabase } from "../../database";
import { toTagRaw } from "./tag.mapper";

export class TagRepository implements ITagRepository {
    constructor(private readonly database: RelationalDatabase) { }

    async getAllTags(): Promise<Tag[]> {
        const tags = await this.database.client.tag.findMany({ include: { tasks: true } })
        return tags.map(toTagRaw)
    }
    async addTag(tag: TagCreateRaw): Promise<TagRaw> {
        const newTag = await this.database.client.tag.create({ data: tag, include: { tasks: true } })
        return toTagRaw(newTag)
    }

}