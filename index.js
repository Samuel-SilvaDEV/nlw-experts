const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "myVar = var;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'getElementById()' em JavaScript?",
      respostas: [
        "Para selecionar um elemento pelo seu ID",
        "Para selecionar um elemento pelo seu nome de classe",
        "Para selecionar um elemento pelo seu nome de tag",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos",
        "Compara apenas valores",
        "Atribuição de valores",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 5 + '3' em JavaScript?",
      respostas: [
        "53",
        "8",
        "15",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Comentário aqui",
        "<!-- Comentário aqui -->",
        "/* Comentário aqui */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorna esse elemento?",
      respostas: [
        "pop()",
        "shift()",
        "slice()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener' faz em JavaScript?",
      respostas: [
        "Adiciona um ouvinte de evento a um elemento HTML",
        "Remove um ouvinte de evento de um elemento HTML",
        "Cria um novo elemento HTML",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Para selecionar o primeiro elemento que corresponde a um seletor CSS especificado",
        "Para selecionar todos os elementos que correspondem a um seletor CSS especificado",
        "Para selecionar o último elemento que corresponde a um seletor CSS especificado",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável constante em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
  ];
  
  // Aqui está buscando a informação no HTML através do document.querySelector
  
  const quiz = document.querySelector('#quiz');
  const template = document.querySelector('template');
  
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector('#acertos span');
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  
  // Loop ou repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true);
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
      dt.querySelector('input').value = item.respostas.indexOf(resposta);
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
  
        corretas.delete(item);
        if(estaCorreta) {
          corretas.add(item);
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
      };
  
      quizItem.querySelector('dl').appendChild(dt);
    }
  
    quizItem.querySelector('dl dt').remove();
  
    // Coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }