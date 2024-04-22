import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
    questionId: string
    studentId: string
    content: string
}

export class AnswerQuestionUseCase {

    constructor(
        private answersRepository: AnswersRepository
    ) {}

    async execute({ questionId, studentId, content }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer({
            content,
            authorId: studentId,
            questionId
        });

        await this.answersRepository.create(answer);

        return answer;
    }
}