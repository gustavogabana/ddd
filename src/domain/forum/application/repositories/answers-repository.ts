import { Answer } from "../forum/enterprise/entities/answer";

export interface AnswersRepository {
    create(answer: Answer): Promise<void>;
}