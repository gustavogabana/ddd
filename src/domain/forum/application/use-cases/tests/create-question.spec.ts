import { CreateQuestionUseCase } from "../create-questions";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: CreateQuestionUseCase;
// sut -> system under test
describe('Create Question', () => {
    beforeEach(() => {
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
        sut = new CreateQuestionUseCase(inMemoryQuestionsRepository);
    });

    it('should be able to create a question', async () => {
        const { question } = await sut.execute({
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
        expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id);
    });
});