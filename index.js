const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        resposta: [
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um banco de dados"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do comando 'console.log' em JavaScript?",
        resposta: [
            "Exibir mensagens de erro no console",
            "Imprimir informações no console",
            "Iniciar uma função assíncrona"
        ],
        correta: 1
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        resposta: [
            "var myVar;",
            "variable myVar;",
            "let myVar = 5;"
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        resposta: [
            "Um tipo de dado",
            "Um bloco de código reutilizável",
            "Uma variável global"
        ],
        correta: 1
    },
    {
        pergunta: "O que significa o termo 'DOM' em JavaScript?",
        resposta: [
            "Data Object Model",
            "Document Object Model",
            "Dynamic Operation Module"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
        resposta: [
            "Não há diferença",
            "let é para variáveis constantes, const é para variáveis mutáveis",
            "const é para variáveis constantes, let é para variáveis mutáveis"
        ],
        correta: 2
    },
    {
        pergunta: "Como se faz um loop 'for' em JavaScript?",
        resposta: [
            "for (i < 10; i++)",
            "for (let i = 0; i < 10; i++)",
            "loop.for(i=0;i<10;i++)"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o 'callback' em JavaScript?",
        resposta: [
            "Uma função que é passada como argumento para outra função",
            "Um tipo de dado primitivo",
            "Um operador lógico"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '==' em JavaScript?",
        resposta: [
            "Comparar valores e tipos de dados",
            "Atribuir um valor a uma variável",
            "Verificar se uma variável está definida"
        ],
        correta: 0
    },
    {
        pergunta: "O que é o 'hoisting' em JavaScript?",
        resposta: [
            "Uma técnica de otimização de código",
            "O processo de elevar variáveis e funções durante a fase de compilação",
            "Um método de manipulação de eventos"
        ],
        correta: 0
    }
];

// selecionando a div que foi feita para clonar o template
const quiz = document.querySelector('#quiz')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostraTotal = document.querySelector('#acertos span')
mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// selecionando o template, que é onde vão ficas as divs que serão clonadas
const template = document.querySelector('template')

// laço de repetição for
for (let item of perguntas) {
    // clonando o template
    const quizItem = template.content.cloneNode(true)

    // selecionando o h3 de cada template e adicionando uma pergunta
    quizItem.querySelector('h3').textContent = item.pergunta

  

// laço de repetição for
    for(let resposta of item.resposta) {
        // selecionando e clonando o dl/dt, que é onde ficam as respostas
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        // adicionando as respostas ao span clonado
        const dl = quizItem.querySelector('dl')
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))       
        dt.querySelector('input').setAttribute('class', 'disable')
        dt.querySelector('input').value = item.resposta.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            dl.querySelectorAll('.disable').forEach(function(item){
                item.disabled = true
            })
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}