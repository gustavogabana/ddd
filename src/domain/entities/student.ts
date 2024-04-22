import { randomUUID } from "node:crypto";

interface StudentProps {
    name: string;
}

export class Student {
    
    public name: string;
    public id?: string;

    constructor(studentProps: StudentProps, id?: string) {
        this.name = studentProps.name;
        this.id = id ?? randomUUID();
    }
}