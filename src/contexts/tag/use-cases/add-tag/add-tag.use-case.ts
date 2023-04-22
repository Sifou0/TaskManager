import { Tag, TagCreate } from "../../domains/types";
import { ITagRepository } from "../../infrastructure";

export class addTagUseCase {
    constructor(private tagRepository: ITagRepository) { }

    async execute(tag: TagCreate): Promise<Tag> {
        return this.tagRepository.addTag(tag)
    }

}