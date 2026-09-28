# Atividade - Algoritmos de Ordenação com JavaScript

## Estrutura

```
atividade_ordenacao_26_09/
├── ordenacao/
│   ├── bubbleSort.js
│   ├── selectionSort.js
│   ├── insertionSort.js
│   └── ordenacao.js
└── README.md
```

## Como executar

```
cd ordenacao
node ordenacao.js
```

Vetor usado: `[8, 3, 5, 1, 9, 6, 2, 7, 4]`

## Resultados obtidos

| Algoritmo | Comparações | Trocas/Movimentações |
|-----------|-------------|----------------------|
| Bubble Sort | 48 | 19 |
| Selection Sort | 36 | 7 |
| Insertion Sort | 27 | 27 |

## Resposta da questão

A principal diferença está no jeito que cada algoritmo escolhe o que comparar e o que mover:

- **Bubble Sort** compara elementos vizinhos e vai empurrando o maior número
  para o fim do vetor, repetindo a varredura várias vezes até terminar. Ele troca
  muito, porque toda comparação que falha gera uma troca.
- **Selection Sort** faz uma varredura procurando sempre o menor número da parte
  que ainda não foi ordenada e coloca ele direto na posição certa. Faz muitas
  comparações, mas troca pouquíssimas vezes (no máximo n-1).
- **Insertion Sort** trata o vetor como se já estivesse parcialmente ordenado: pega
  um elemento e vai "enfiando" ele para trás até achar o lugar certo. Faz o
  menor número de comparações quando o vetor já está quase ordenado, mas causa
  mais movimentações, porque desloca vários elementos de uma vez.

Ou seja: o Bubble Sort troca muito e compara muito, o Selection Sort troca pouco
e compara muito, e o Insertion Sort é o mais eficiente em comparações, jogando
o custo para as movimentações. Todos chegam no mesmo resultado, só muda o
esforço de cada um.
