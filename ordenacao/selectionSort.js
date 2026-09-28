// selectionSort.js - Algoritmo de ordenacao por selecao (Selection Sort)
// Procura o menor numero da parte que ainda nao foi ordenada e coloca no lugar.

function selectionSort(vetor) {
  var comparacoes = 0;
  var trocas = 0;
  var tamanho = vetor.length;
  var i;
  var j;
  var indiceMenor;
  var auxiliar;

  for (i = 0; i < tamanho - 1; i++) {
    indiceMenor = i;
    for (j = i + 1; j < tamanho; j++) {
      comparacoes = comparacoes + 1;
      if (vetor[j] < vetor[indiceMenor]) {
        indiceMenor = j;
      }
    }
    if (indiceMenor != i) {
      auxiliar = vetor[i];
      vetor[i] = vetor[indiceMenor];
      vetor[indiceMenor] = auxiliar;
      trocas = trocas + 1;
    }
  }

  return { vetor: vetor, comparacoes: comparacoes, trocas: trocas };
}

module.exports = selectionSort;
