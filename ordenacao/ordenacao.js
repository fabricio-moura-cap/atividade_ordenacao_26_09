// Executa os três algoritmos de ordenação sobre o mesmo vetor de entrada,
// exibindo o vetor original, o vetor ordenado e as métricas de cada um.
var bubbleSort = require('./bubbleSort.js');
var selectionSort = require('./selectionSort.js');
var insertionSort = require('./insertionSort.js');

// Vetor de teste utilizado na atividade.
var vetor = [8, 3, 5, 1, 9, 6, 2, 7, 4];

// Executa um algoritmo e imprime o resultado no console.
function executar(nome, funcao) {
  var copia = [];
  var i;
  var resultado;

  // Uma cópia do vetor é feita porque o algoritmo altera o array recebido.
  for (i = 0; i < vetor.length; i++) {
    copia[i] = vetor[i];
  }

  resultado = funcao(copia);

  console.log('Algoritmo: ' + nome);
  console.log('');
  console.log('Original:');
  console.log(vetor);
  console.log('');
  console.log('Ordenado:');
  console.log(resultado.vetor);
  console.log('');
  console.log('Comparações: ' + resultado.comparacoes);
  console.log('Trocas: ' + resultado.trocas);
  console.log('---------------------------------------------');
  console.log('');

  return resultado;
}

var rBubble = executar('Bubble Sort', bubbleSort);
var rSelection = executar('Selection Sort', selectionSort);
var rInsertion = executar('Insertion Sort', insertionSort);

// Montagem da tabela comparativa solicitada na atividade.
console.log('Algoritmo | Comparações | Trocas/Movimentações');
console.log('Bubble Sort | ' + rBubble.comparacoes + ' | ' + rBubble.trocas);
console.log('Selection Sort | ' + rSelection.comparacoes + ' | ' + rSelection.trocas);
console.log('Insertion Sort | ' + rInsertion.comparacoes + ' | ' + rInsertion.trocas);
