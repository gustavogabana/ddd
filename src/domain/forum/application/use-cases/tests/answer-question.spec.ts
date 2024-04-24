import { AnswerQuestionUseCase } from '../answer-question'
import { Answer } from '../../../enterprise/entities/answer';
import { AnswersRepository } from '../../repositories/answers-repository';

const fakeAwnsersRepository: AnswersRepository = {
    create: async (answer: Answer) => {
        return;
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAwnsersRepository);
    const answer = await answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'Nova Resposta'
    });

    expect(answer.content).toEqual('Nova Resposta');

});