

// Array contendo as perguntas, respostas e a resposta correta para cada pergunta
const perguntas = [
    {
        pergunta: "1- O que aconteceu com as sementes que caíram à beira do caminho?",
        respostas: ["a) deram frutos, uns de 30, 60 e 100", "b) foram comidas pelas aves", "c) brotaram, mas logo secaram por falta de raiz", "d) foram sufocadas", "e) nenhuma das alternativas anteriores"],
        correta: "b) foram comidas pelas aves"
    },
    {
        pergunta: "2- O que aconteceu com as sementes que caíram em solo rochoso?",
        respostas: ["a) deram frutos, uns de 30, 60 e 100", "b) foram comidas pelas aves", "c) brotaram, mas logo secaram por falta de raiz", "d) foram sufocadas", "e) nenhuma das alternativas anteriores"],
        correta: "c) brotaram, mas logo secaram por falta de raiz"
    },
    {
        pergunta: "3- O que aconteceu com as sementes que caíram entre espinhos?",
        respostas: ["a) deram frutos, uns de 30, 60 e 100", "b) foram comidas pelas aves", "c) brotaram, mas logo secaram por falta de raiz", "d) foram sufocadas", "e) nenhuma das alternativas anteriores"],
        correta: "d) foram sufocadas"
    },
    {
        pergunta: "4- O que aconteceu com as sementes que caíram em boa terra?",
        respostas: ["a) deram frutos, uns de 30, 60 e 100", "b) foram comidas pelas aves", "c) brotaram, mas logo secaram por falta de raiz", "d) foram sufocadas", "e) nenhuma das alternativas anteriores"],
        correta: "a) deram frutos, uns de 30, 60 e 100"
    },
    {
        pergunta: "5- Como o fruto se multiplicou nas sementes que caíram em boa terra?",
        respostas: ["a) 30, 60 e 100", "b) 10, 20 e 30", "c) 30, 70 e 700", "d) não prosperaram", "e) nenhuma das alternativas anteriores"],
        correta: "a) 30, 60 e 100"
    }
];

// Variáveis para armazenar o índice da pergunta atual e a pontuação
let indicePerguntaAtual = 0;
let pontuacao = 0;

// Selecionando os elementos HTML que serão manipulados pelo JavaScript
const elementoPergunta = document.getElementById("pergunta");
const botoesResposta = document.querySelectorAll(".botao-resposta");
const botaoProximo = document.getElementById("botao-proximo");
const containerResultado = document.getElementById("resultado");
const elementoPontuacao = document.getElementById("pontuacao");

// Função para iniciar o quiz, exibindo a primeira pergunta
function iniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    botaoProximo.style.display = "none";
    containerResultado.style.display = "none";
    exibirPergunta();
}

// Função para exibir a pergunta atual e as respostas
function exibirPergunta() {
    resetarEstado(); // Reseta o estado dos botões a cada nova pergunta
    const perguntaAtual = perguntas[indicePerguntaAtual]; // Obtém a pergunta atual
    elementoPergunta.innerText = perguntaAtual.pergunta; // Exibe a pergunta

    // Exibe as respostas nos botões
    botoesResposta.forEach((botao, index) => {
        botao.innerText = perguntaAtual.respostas[index];
        botao.addEventListener("click", selecionarResposta); // Adiciona o evento de clique
    });
}

// Função para resetar o estado dos botões entre as perguntas
function resetarEstado() {
    botaoProximo.style.display = "none"; // Esconde o botão de próxima pergunta
    botoesResposta.forEach(botao => {
        botao.disabled = false; // Habilita os botões
        botao.classList.remove("correto", "incorreto"); // Remove as classes de estilo de resposta
    });
}

// Função para processar a resposta selecionada pelo usuário
function selecionarResposta(e) {
    const botaoSelecionado = e.target; // Identifica o botão clicado
    const respostaCorreta = botaoSelecionado.innerText === perguntas[indicePerguntaAtual].correta; // Verifica se a resposta está correta
    if (respostaCorreta) {
        botaoSelecionado.classList.add("correto"); // Aplica estilo de resposta correta
        pontuacao++; // Incrementa a pontuação
    } else {
        botaoSelecionado.classList.add("incorreto"); // Aplica estilo de resposta incorreta
    }

    // Desativa todos os botões de resposta após a seleção
    botoesResposta.forEach(botao => botao.disabled = true);

    botaoProximo.style.display = "block"; // Exibe o botão para ir para a próxima pergunta
}

// Função para exibir o resultado final do quiz
function exibirResultado() {
    containerResultado.style.display = "block"; // Exibe o resultado
    elementoPontuacao.innerText = `${pontuacao} de ${perguntas.length}`; // Exibe a pontuação
}

// Evento para avançar para a próxima pergunta
botaoProximo.addEventListener("click", () => {
    indicePerguntaAtual++; // Avança para a próxima pergunta
    if (indicePerguntaAtual < perguntas.length) {
        exibirPergunta(); // Exibe a próxima pergunta
    } else {
        exibirResultado(); // Exibe o resultado final quando as perguntas acabarem
    }
});

// Inicializa o quiz ao carregar a página
iniciarQuiz();