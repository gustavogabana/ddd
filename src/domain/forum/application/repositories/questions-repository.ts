import { Question } from "../../enterprise/entities/question";

export interface QuestionsRepository {
    create(question: Question): Promise<void>;
    findById(questionId: string): Promise<Question | null>;
    findBySlug(slug: string): Promise<Question | null>;
    delete(question: Question): Promise<void>;
}