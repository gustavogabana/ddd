import { CreateQuestionUseCase } from "../create-questions";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "../get-question-by-slug";
import { Question } from "@/domain/forum/enterprise/entities/question";
import { Slug } from "@/domain/forum/enterprise/entities/value-objects/slug";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: GetQuestionBySlugUseCase;
// sut -> system under test
describe('Find Question By Slug', () => {
    beforeEach(() => {
        inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
        sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository);
    });

    it('should be able to get a question by its slug', async () => {
        const newQuestion = Question.create({
            title: 'Example Question',
            slug: Slug.create('example-question'),
            authorId: new UniqueEntityId('1'),
            content: 'Example content'
        });

        inMemoryQuestionsRepository.create(newQuestion);

        const { question } = await sut.execute({
            slug: 'example-question',
        });
    
        expect(question.id).toBeTruthy();
        expect(question.title).toEqual(newQuestion.title);
        expect(question.slug).toEqual(newQuestion.slug);
    });
});