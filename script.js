//Aqui estão as perguntas
const perguntas = [
    {
        pergunta: "Quantas horas tem um dia?",
        respostas: [
            "20 horas",
            "24 horas",
            "48 horas",
        ],
        correta: 1,
    },
    {
        pergunta: "Qual o mês que tem 28 dias?",
        respostas: [
            "Fevereiro",
            "Dezembro",
            "Todos os meses",
        ],
        correta: 2,
    },
    {
        pergunta: "Quantos dias tem em um ano?",
        respostas: [
            "1000 dias",
            "365 dias",
            "465 dias",
        ],
        correta: 1,
    },
    {
        pergunta: "Resolva o cálculo: (1+1)",
        respostas: [
            "2",
            "11",
            "21",
        ],
        correta: 0,
    },
    {
        pergunta: "Quantos meses tem em um ano?",
        respostas: [
            "14",
            "24",
            "12",
        ],
        correta: 2,
    }
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

