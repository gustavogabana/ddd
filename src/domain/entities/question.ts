import { randomUUID } from "node:crypto";

interface QuestionProps {
    title: string;
    content: string;
    authorId: string;
}

export class Question {
    constructor(public questionProps: QuestionProps, public id?: string) {
        id = id ?? randomUUID();
    }
}