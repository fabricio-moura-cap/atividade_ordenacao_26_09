// Implementa o algoritmo de ordenação por seleção (Selection Sort).
// O vetor recebido é ordenado em ordem crescente e devolvido junto com
// a quantidade de comparações e de trocas realizadas durante o processo.

function selectionSort(vetor) {
  var comparacoes = 0;
  var trocas = 0;
  var tamanho = vetor.length;
  var i;
  var j;
  var indiceMenor;
  var auxiliar;

  // A cada iteração, o menor valor da parte não ordenada é localizado
  // e colocado na posição que ele ocupa definitivamente no vetor.
  for (i = 0; i < tamanho - 1; i++) {
    indiceMenor = i;
    for (j = i + 1; j < tamanho; j++) {
      comparacoes = comparacoes + 1;
      if (vetor[j] < vetor[indiceMenor]) {
        indiceMenor = j;
      }
    }
    // A troca só é realizada se o menor valor não estiver na posição atual.
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
