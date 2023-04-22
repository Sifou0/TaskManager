import { Request, Response } from "express";
import { addTagUseCase, getAllTagsUseCase } from "../../use-cases";

export class tagController {
    constructor(
        private readonly addTagUseCase: addTagUseCase,
        private readonly getAllTagsUseCase: getAllTagsUseCase
    ) { }

    async getAllTags(req: Request, res: Response) {
        const tags = await this.getAllTagsUseCase.execute()
        res.status(200).json(tags)
    }

    async addTag(req: Request, res: Response) {
        try {
            const tag = await this.addTagUseCase.execute(req.body)
            res.status(201).json(tag)
        } catch (error: any) {
            console.log(error);
            res.status(500).json([
                {
                    code: 'INTERNAL_SERVER_ERROR'
                }
            ])
        }
    }
}