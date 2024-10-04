import { Tag } from "./tag";

export class Article {
    articleId: number;
    articleTitle: string;
    articleBody: string;
    articleDate: Date;
    articleTags: Tag[];
}
