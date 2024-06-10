import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { makeQuestion } from "test/factories/make-question";
import { DeleteQuestionUseCase } from "../delete-question";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { rejects } from "assert";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: DeleteQuestionUseCase;
// sut -> system under test
describe('Delete Question', () => {
    beforeEach(() => {
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
        sut = new DeleteQuestionUseCase(inMemoryQuestionsRepository);
    });

    it('should be able to delete a question', async () => {
        const newQuestion = makeQuestion({
            authorId: new UniqueEntityId('author-1')
        }, new UniqueEntityId('question-1'));

        await inMemoryQuestionsRepository.create(newQuestion);

        await sut.execute({ questionId: newQuestion.id.toString(), authorId: newQuestion.authorId.toString() });
    
        expect(inMemoryQuestionsRepository.items).toHaveLength(0);
    });

    it('it should not be able to delete a question from another user', async () => {
        const newQuestion = makeQuestion({
            authorId: new UniqueEntityId('author-1')
        }, new UniqueEntityId('question-1'));

        await inMemoryQuestionsRepository.create(newQuestion);

        expect(async () => {
            return await sut.execute({ questionId: newQuestion.id.toString(), authorId: 'question-2' })
        }).rejects.toBeInstanceOf(Error);

    });
});