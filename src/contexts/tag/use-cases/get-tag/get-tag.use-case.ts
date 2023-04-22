import { ITagRepository } from "../../infrastructure";

export class getAllTagsUseCase {
    constructor(private tagRepository: ITagRepository) { }

    async execute() {
        return this.tagRepository.getAllTags()
    }
}