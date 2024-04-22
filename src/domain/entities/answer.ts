import { randomUUID } from "node:crypto";

interface AnswerProps {
    content: string;
    authorId: string;
    questionId: string;
}

export class Answer {

    public content: string;
    public authorId: string;
    public questionId: string;
    public id?: string;

    constructor(answerProps: AnswerProps, id?: string) {
        this.content = answerProps.content;
        this.authorId = answerProps.authorId;
        this.questionId = answerProps.questionId;
        this.id = id ?? randomUUID();
    }
}