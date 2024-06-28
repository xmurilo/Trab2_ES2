const QuizDeEsportes = require('./quiz_de_esportes.js');
const prompt = require('prompt-sync')();

jest.mock('prompt-sync', () => () => jest.fn());

describe('QuizDeEsportes', () => {
  let quiz;
  beforeEach(() => {
    quiz = new QuizDeEsportes();
  });

  test('Deve inicializar com perguntas e score zero', () => {
    expect(quiz.perguntas.length).toBe(3);
    expect(quiz.score).toBe(0);
  });


  test('Deve retornar falso para resposta incorreta', () => {
    prompt.mockReturnValue('1'); // Brasil
    const resultado = quiz.fazerPergunta(
      'Qual país ganhou a Copa do Mundo de 2018?',
      ['Brasil', 'Alemanha', 'França', 'Argentina'],
      'França'
    );
    expect(resultado).toBe(false);
  });

  test('Deve incrementar o score para respostas corretas', () => {
    prompt.mockReturnValueOnce('3') // França
    .mockReturnValueOnce('4') // Wilt Chamberlain
    .mockReturnValueOnce('3'); // 11
    quiz.iniciarQuiz();
    expect(quiz.score).toBe(3);
  });

  test('Deve manter o score zero para respostas incorretas', () => {
    prompt.mockReturnValueOnce('1') // Brasil
           .mockReturnValueOnce('2') // LeBron James
           .mockReturnValueOnce('4'); // 12
    quiz.iniciarQuiz();
    expect(quiz.score).toBe(0);
  });
});
