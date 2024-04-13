import { randomUUID } from "node:crypto";

export class Question {
    constructor(
        public title: string, 
        public content: string,
        public id?: string
    ) {
        id = id ?? randomUUID()
    }
}