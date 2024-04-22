import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";

interface QuestionProps {
    title: string;
    content: string;
    authorId: string;
    slug: Slug;
}

export class Question {
    public title: string;
    public content: string;
    public authorId: string;
    public slug: Slug;
    public id?: string;

    constructor(questionProps: QuestionProps, id?: string) {
        this.title = questionProps.title;
        this.content = questionProps.content;
        this.authorId = questionProps.authorId;
        this.slug = questionProps.slug;
        this.id = id ?? randomUUID();
    }
}