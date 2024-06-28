# Bruno: Criando a classe de Quiz de Esportes com um construtor com as perguntas, opções, respostas corretas e o score.
class QuizDeEsportes:
    def __init__(self):
        self.perguntas = [
            {
                "pergunta": "Qual país ganhou a Copa do Mundo de 2018?",
                "opcoes": ["Brasil", "Alemanha", "França", "Argentina"],
                "resposta_correta": "França"
            },
            {
                "pergunta": "Quem detém o recorde de mais pontos em um único jogo da NBA?",
                "opcoes": ["Michael Jordan", "LeBron James", "Kobe Bryant", "Wilt Chamberlain"],
                "resposta_correta": "Wilt Chamberlain"
            },
            {
                "pergunta": "Quantos jogadores há em um time de futebol?",
                "opcoes": ["9", "10", "11", "12"],
                "resposta_correta": "11"
            }
        ]
        self.score = 0

    def fazer_pergunta(self, pergunta, opcoes, resposta_correta):
        print(pergunta)
        for i, opcao in enumerate(opcoes, 1):
            print(f"{i}. {opcao}")
        resposta = input("Digite o número da sua resposta: ")
         # * Murilo: Refatorando o código para tratar exceções e evitar erros de execução.
        try:
            resposta = int(resposta)
            if opcoes[resposta - 1] == resposta_correta:
                print("Resposta correta!")
                return True
            else:
                print("Resposta errada!")
                return False
        except (ValueError, IndexError):
            print("Entrada inválida! Por favor, digite um número válido.")
            return False
    # Lucas: Adicionando um método para iniciar o quiz e percorrer todas as perguntas.
    def iniciar_quiz(self):
        for pergunta in self.perguntas:
            if self.fazer_pergunta(pergunta["pergunta"], pergunta["opcoes"], pergunta["resposta_correta"]):
                self.score += 1

        print(f"Você acertou {self.score} de {len(self.perguntas)} perguntas.")

if __name__ == "__main__":
    quiz = QuizDeEsportes()
    quiz.iniciar_quiz()
