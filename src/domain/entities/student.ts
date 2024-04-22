import { randomUUID } from "node:crypto";

interface StudentProps {
    name: string;
}

export class Student {
    constructor(public studentProps: StudentProps, public id?: string) {
        id = id ?? randomUUID();
    }
}