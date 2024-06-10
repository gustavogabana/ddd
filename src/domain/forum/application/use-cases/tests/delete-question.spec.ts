import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { Slug } from "@/domain/forum/enterprise/entities/value-objects/slug";
import { makeQuestion } from "test/factories/make-question";
import { DeleteQuestionUseCase } from "../delete-question";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: DeleteQuestionUseCase;
// sut -> system under test
describe('Delete Question', () => {
    beforeEach(() => {
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
        sut = new DeleteQuestionUseCase(inMemoryQuestionsRepository);
    });

    it('should be able to delete a question', async () => {
        const newQuestion = makeQuestion({}, new UniqueEntityId('question-1'));

        await inMemoryQuestionsRepository.create(newQuestion);

        await sut.execute({ questionId: newQuestion.id.toString() });
    
        expect(inMemoryQuestionsRepository.items).toHaveLength(0);
    });
});