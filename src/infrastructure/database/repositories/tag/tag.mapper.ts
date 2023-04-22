import { Tag } from "@prisma/client";
import { TagRaw } from "../../../../contexts/tag/infrastructure";


export function toTagRaw(tag: Tag): TagRaw {
    return {
        id: tag.id,
        title: tag.title
    }
}