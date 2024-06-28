const prompt = require("prompt-sync")();
// Bruno: Criando a classe de Quiz de Esportes com um construtor com as perguntas, opções, respostas corretas e o score.
class QuizDeEsportes {
    constructor() {
        this.perguntas = [
            {
                pergunta: "Qual país ganhou a Copa do Mundo de 2018?",
                opcoes: ["Brasil", "Alemanha", "França", "Argentina"],
                resposta_correta: "França"
            },
            {
                pergunta: "Quem detém o recorde de mais pontos em um único jogo da NBA?",
                opcoes: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Wilt Chamberlain"],
                resposta_correta: "Wilt Chamberlain"
            },
            {
                pergunta: "Quantos jogadores há em um time de futebol?",
                opcoes: ["9", "10", "11", "12"],
                resposta_correta: "11"
            }
        ];
        this.score = 0;
    }

    fazerPergunta(pergunta, opcoes, respostaCorreta) {
        console.log(pergunta);
        opcoes.forEach((opcao, index) => {
            console.log(`${index + 1}. ${opcao}`);
        });
        const resposta = prompt("Digite o número da sua resposta: ");
        
        // # * Murilo: Refatorando o código para tratar exceções e evitar erros de execução.
        try {
            const respostaNum = parseInt(resposta);
            if (opcoes[respostaNum - 1] === respostaCorreta) {
                console.log("Resposta correta!");
                return true;
            } else {
                console.log("Resposta errada!");
                return false;
            }
        } catch (e) {
            console.log("Entrada inválida! Por favor, digite um número válido.");
            return false;
        }
    }

    // Lucas: Adicionando um método para iniciar o quiz e percorrer todas as perguntas.
    iniciarQuiz() {
        this.perguntas.forEach(pergunta => {
            if (this.fazerPergunta(pergunta.pergunta, pergunta.opcoes, pergunta.resposta_correta)) {
                this.score++;
                console.log(this.score)
            }
        });

        console.log(`Você acertou ${this.score} de ${this.perguntas.length} perguntas.`);
    }
}

module.exports = QuizDeEsportes;

const quiz = new QuizDeEsportes();
quiz.iniciarQuiz();
