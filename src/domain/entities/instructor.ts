import { Entity } from "../../core/entities/entity";

interface InstructorProps {
    name: string;
    id?: string;
}

export class Instructor extends Entity<InstructorProps> {
    
}