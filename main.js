const perguntasPorFase = [
  // FASE 1 - Iniciante
  [
    {
      pergunta: "O que é empreendedorismo?",
      alternativas: ["Abrir um negócio próprio", "Ser empregado de uma empresa", "Aposentar cedo"],
      correta: 0
    },
    {
      pergunta: "Qual dessas é uma qualidade importante de um empreendedor?",
      alternativas: ["Desânimo", "Coragem", "Conformismo"],
      correta: 1
    },
    {
      pergunta: "Qual desses é um exemplo de produto?",
      alternativas: ["Cortar cabelo", "Entregar pizza", "Celular"],
      correta: 2
    },
    {
      pergunta: "Empreendedores resolvem...",
      alternativas: ["Problemas", "Jogos", "Séries"],
      correta: 0
    },
    {
      pergunta: "Quem vende brigadeiro para juntar dinheiro está...",
      alternativas: ["Gastando", "Empreendendo", "Brincando"],
      correta: 1
    }
  ],

  // FASE 2 - Básico
  [
    {
      pergunta: "Qual é o primeiro passo para começar um negócio?",
      alternativas: ["Abrir uma loja", "Ter uma ideia", "Comprar um carro"],
      correta: 1
    },
    {
      pergunta: "O que é cliente?",
      alternativas: ["Quem vende", "Quem compra", "Quem fabrica"],
      correta: 1
    },
    {
      pergunta: "Um bom produto é aquele que...",
      alternativas: ["É bonito", "Custa caro", "Resolve um problema"],
      correta: 2
    },
    {
      pergunta: "Um empreendedor precisa saber lidar com...",
      alternativas: ["Riscos", "Férias", "Brigas"],
      correta: 0
    },
    {
      pergunta: "Empreendedorismo também pode acontecer em...",
      alternativas: ["Empresas", "Escolas", "Ambos"],
      correta: 2
    }
  ],

  // FASE 3 - Intermediário
  [
    {
      pergunta: "O que significa inovar?",
      alternativas: ["Copiar uma ideia", "Fazer algo novo", "Vender mais"],
      correta: 1
    },
    {
      pergunta: "O que é um plano de negócio?",
      alternativas: ["Uma loja bonita", "Uma lista de compras", "Um planejamento do seu negócio"],
      correta: 2
    },
    {
      pergunta: "O que é marketing?",
      alternativas: ["Promoção e venda de produtos", "Administrar dinheiro", "Fazer compras"],
      correta: 0
    },
    {
      pergunta: "O que é necessário para ter lucro?",
      alternativas: ["Vender barato", "Ganhar mais do que gasta", "Vender muito"],
      correta: 1
    },
    {
      pergunta: "Como melhorar seu produto?",
      alternativas: ["Ignorar os clientes", "Ouvir os clientes", "Copiar concorrentes"],
      correta: 1
    }
  ],

  // FASE 4 – Avançado
  [
    {
      pergunta: "O que é investimento inicial?",
      alternativas: ["Dinheiro para lazer", "Dinheiro para começar o negócio", "Lucro total"],
      correta: 1
    },
    {
      pergunta: "Um diferencial competitivo é...",
      alternativas: ["Um produto igual ao outro", "Algo que destaca seu negócio", "Um preço mais alto"],
      correta: 1
    },
    {
      pergunta: "Qual ferramenta ajuda a entender os custos?",
      alternativas: ["Mapa mental", "Fluxo de caixa", "Lista de desejos"],
      correta: 1
    },
    {
      pergunta: "Networking é importante para...",
      alternativas: ["Ficar famoso", "Conhecer pessoas e oportunidades", "Viajar a trabalho"],
      correta: 1
    },
    {
      pergunta: "Pitch é...",
      alternativas: ["Uma ideia confusa", "Uma apresentação rápida e clara da ideia", "Um produto barato"],
      correta: 1
    }
  ],

  // FASE 5 – Desafio Final
  [
    {
      pergunta: "O que é escalabilidade em um negócio?",
      alternativas: ["Aumentar o preço", "Crescer sem aumentar muito os custos", "Mudar de área"],
      correta: 1
    },
    {
      pergunta: "O que representa um modelo de negócio?",
      alternativas: ["Como o negócio funciona e gera valor", "A cor do logotipo", "A escolha do nome"],
      correta: 0
    },
    {
      pergunta: "Qual é o objetivo de validar uma ideia?",
      alternativas: ["Testar no mercado antes de investir muito", "Ter lucro imediato", "Mudar de ideia"],
      correta: 0
    },
    {
      pergunta: "Qual destas é uma startup?",
      alternativas: ["Empresa tradicional", "Empresa jovem, inovadora e escalável", "Empresa pública"],
      correta: 1
    },
    {
      pergunta: "Ser resiliente é...",
      alternativas: ["Desistir rápido", "Lidar bem com desafios e continuar tentando", "Evitar mudanças"],
      correta: 1
    }
  ]
];

let faseAtual = 0;
let perguntaAtual = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const cartasContainer = document.getElementById("cartas-container");
const faseEl = document.getElementById("fase");
const pontosEl = document.getElementById("pontos");
const proximaFaseBtn = document.getElementById("proxima-fase");
const fimJogoEl = document.getElementById("fim-jogo");

function mostrarPergunta() {
  const fase = perguntasPorFase[faseAtual];
  const perguntaObj = fase[perguntaAtual];

  perguntaEl.textContent = perguntaObj.pergunta;
  cartasContainer.innerHTML = "";

  perguntaObj.alternativas.forEach((texto, index) => {
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.textContent = texto;
    carta.addEventListener("click", () => verificarResposta(index, carta));
    cartasContainer.appendChild(carta);
  });
}

function verificarResposta(selecionada, carta) {
  const pergunta = perguntasPorFase[faseAtual][perguntaAtual];
  const todasCartas = document.querySelectorAll(".carta");

  todasCartas.forEach(c => c.style.pointerEvents = "none");

  if (selecionada === pergunta.correta) {
    carta.classList.add("correta");
    pontos += 10;
    pontosEl.textContent = pontos;
  } else {
    carta.classList.add("errada");
    todasCartas[pergunta.correta].classList.add("correta");
  }

  setTimeout(() => {
    perguntaAtual++;
    if (perguntaAtual < perguntasPorFase[faseAtual].length) {
      mostrarPergunta();
    } else {
      if (faseAtual < perguntasPorFase.length - 1) {
        proximaFaseBtn.style.display = "inline-block";
      } else {
        fimJogoEl.style.display = "block";
      }
    }
  }, 1200);
}

proximaFaseBtn.addEventListener("click", () => {
  faseAtual++;
  perguntaAtual = 0;
  faseEl.textContent = faseAtual + 1;
  proximaFaseBtn.style.display = "none";
  mostrarPergunta();
});

// Iniciar
mostrarPergunta();
