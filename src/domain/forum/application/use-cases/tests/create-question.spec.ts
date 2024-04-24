import { Question } from "@/domain/forum/enterprise/entities/question"
import { QuestionsRepository } from "../../repositories/questions-repository"
import { CreateQuestionUseCase } from "../create-questions";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

const fakeQuestionRepository: QuestionsRepository = {
    create: async (question: Question) => {
        return;
    }
}

test('create a question', async () => {
    const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository);
    const { question } = await createQuestion.execute({
        authorId: '1',
        title: 'testing',
        content: 'ipsum lorem test text'
    });

    expect(question.id).toBeTruthy();
    expect(question.id).toBeInstanceOf(UniqueEntityId);
    expect(question.title).toEqual('testing');
    expect(question.content).toEqual('ipsum lorem test text');
    expect(question.slug).toBeTruthy();
    expect(question.createdAt).toBeInstanceOf(Date);
})