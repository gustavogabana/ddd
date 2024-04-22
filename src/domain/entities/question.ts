import { randomUUID } from "node:crypto";

interface QuestionProps {
    title: string;
    content: string;
    authorId: string;
}

export class Question {
    
    public title: string;
    public content: string;
    public authorId: string;
    public id?: string;

    constructor(questionProps: QuestionProps, id?: string) {
        this.title = questionProps.title;
        this.content = questionProps.content;
        this.authorId = questionProps.authorId;
        this.id = id ?? randomUUID();
    }
}