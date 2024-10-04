import { Article } from "./article";

export class Tag {
    tagId: number;
    tagName: string;
    tagDescription: string;
    tagArticles: Article[];
}
