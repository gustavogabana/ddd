import { randomUUID } from "node:crypto";

interface AnswerProps {
    content: string;
    authorId: string;
    questionId: string;
}

export class Answer {
    constructor(public answerProps: AnswerProps, public id?: string) {
        id = id ?? randomUUID();
    }
}