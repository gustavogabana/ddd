import { Answer } from "../entities/answer"

interface AnswerQuestionUseCaseRequest {
    questionId: string
    studentId: string
    content: string
}

export class AnswerQuestionUseCase {
    execute({ questionId, studentId, content }: AnswerQuestionUseCaseRequest) {
        const answer = new Answer(content)
        return answer
    }
}