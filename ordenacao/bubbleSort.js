// bubbleSort.js - Algoritmo de ordenacao por bolhas (Bubble Sort)
// Feito de um jeito meio "na mao", sem usar Array.sort() nem funcoes prontas.

function bubbleSort(vetor) {
  var comparacoes = 0;
  var trocas = 0;
  var tamanho = vetor.length;
  var auxiliar;
  var i;
  var j;
  var trocou;

  // vou repetir a varredura varias vezes ate nao trocar mais nada
  for (i = 0; i < tamanho; i++) {
    trocou = false;
    for (j = 0; j < tamanho - 1; j++) {
      comparacoes = comparacoes + 1;
      if (vetor[j] > vetor[j + 1]) {
        auxiliar = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = auxiliar;
        trocas = trocas + 1;
        trocou = true;
      }
    }
    // se nao trocou nada, o vetor ja esta ordenado, nao precisa continuar
    if (trocou == false) {
      i = tamanho;
    }
  }

  return { vetor: vetor, comparacoes: comparacoes, trocas: trocas };
}

module.exports = bubbleSort;
