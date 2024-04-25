import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { AnswerQuestionUseCase } from "../answer-question";
import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;
// sut -> system under test
describe('Create Answer', () => {
    beforeEach(() => {
        inMemoryAnswersRepository = new InMemoryAnswersRepository();
        sut = new AnswerQuestionUseCase(inMemoryAnswersRepository);
    });

    it('should be able to create a answer', async () => {
        const { answer } = await sut.execute({
            content: 'ipsum lorem test text',
            instructorId: '10',
            questionId: '20'
        });
    
        expect(answer.id).toBeTruthy();
        expect(answer.id).toBeInstanceOf(UniqueEntityId);
        expect(answer.questionId).toBeInstanceOf(UniqueEntityId);
        expect(answer.questionId).toEqual(new UniqueEntityId('20'));
        expect(answer.content).toEqual('ipsum lorem test text');
        expect(answer.excerpt).contain(answer.content);
        expect(answer.createdAt).toBeInstanceOf(Date);
        expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id);
    });
});