def fazerpergunta(pergunta, opcoes, respostacorreta):
    print(pergunta)
    for i, opcao in enumerate(opcoes, 1):
        print(f"{i}. {opcao}")
    resposta = input("Digite o número da sua resposta: ")

    if resposta == respostacorreta:
        print("Resposta correta!")
        return True
    else:
        print("Resposta errada!")
        return False

def quizde_esportes():
    perguntas = [
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

    score = 0
    for p in perguntas:
        if fazer_pergunta(p["pergunta"], p["opcoes"], p["resposta_correta"]):
            score += 1

    print(f"Você acertou {score} de {len(perguntas)} perguntas.")

if __name == "__main":
    quiz_de_esportes()