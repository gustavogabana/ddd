import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

interface InstructorProps {
    name: string;
    id?: UniqueEntityId;
}

export class Instructor extends Entity<InstructorProps> {
    static create(
        props: InstructorProps, 
        id?: UniqueEntityId
    ) {
        const instructor = new Instructor({...props}, id);
        return instructor;
    }
}