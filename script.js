//Aqui estão as perguntas
const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de marcação",
            "Uma linguagem de programação",
            "Um sistema operacional",
        ],
        correta: 1,
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Compara dois valores para igualdade, sem verificar o tipo",
            "Atribui um valor a uma variável",
            "Compara dois valores para igualdade, verificando o tipo",
        ],
        correta: 2,
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um método de criptografia",
            "Um modelo de objeto para representar documentos HTML e XML",
            "Um novo tipo de dado",
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
        respostas: [
            "Mostrar mensagens de erro no console",
            "Registrar mensagens no console para depuração",
            "Executar uma função específica",
        ],
        correta: 2,
    },
    {
        pergunta: "O que significa a sigla 'JSON' em JavaScript?",
        respostas: [
            "JavaScript Object Notation",
            "Just Some Random Object Names",
            "JavaScript Operator Navigator",
        ],
        correta: 1,
    },
    {
        pergunta: "Como se declara uma função em JavaScript?",
        respostas: [
            "function minhaFuncao()",
            "var minhaFuncao = function()",
            "As duas opções anteriores estão corretas",
        ],
        correta: 3,
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Nenhuma diferença, ambos comparam valores de forma estrita",
            " '===' compara valores e tipos, enquanto '==' compara apenas valores",
            "'==' compara valores e tipos, enquanto '===' compara apenas valores",
        ],
        correta: 2,
    },
    {
        pergunta: "O que é um evento em JavaScript?",
        respostas: [
            "Uma função",
            "Uma ação desencadeada, como um clique do mouse",
            "Uma variável",
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do operador '&&' em JavaScript?",
        respostas: [
            "Operador de concatenação de strings",
            "Operador lógico AND",
            "Operador de comparação de igualdade",
        ],
        correta: 2,
    },
];


const quiz = document.querySelector('#quiz'); //seleciona o id "quiz" no html
const template = document.querySelector('template'); //seleciona a tag "template do html"

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal =  document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//Estrutura de repetição, a const "item" passa por todos os itens da const "perguntas"
for(const item of perguntas){


    const quizItem = template.content.cloneNode(true); //Clona os itens do template do html
    quizItem.querySelector('h3').textContent = item.pergunta; //Muda o texto

    //O let "resposta" passa por todos os itens das respostas de cada item
    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

    
        quizItem.querySelector('dl').appendChild(dt);
    };
    
    // Remove o "Resposta A"
    quizItem.querySelector('dl dt').remove();


    //Coloca na tela
    quiz.appendChild(quizItem);
};

