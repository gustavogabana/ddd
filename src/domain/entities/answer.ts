import { randomUUID } from "node:crypto";

export class Answer {
    constructor(
        public content: string,
        public id?: string
    ) {
        id = id ?? randomUUID()
    }
}