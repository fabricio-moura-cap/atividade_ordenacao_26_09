// Implementa o algoritmo de ordenação por bolhas (Bubble Sort).
// O vetor recebido é ordenado em ordem crescente e devolvido junto com
// a quantidade de comparações e de trocas realizadas durante o processo.

function bubbleSort(vetor) {
  var comparacoes = 0;
  var trocas = 0;
  var tamanho = vetor.length;
  var auxiliar;
  var i;
  var j;
  var trocou;

  // A varredura é repetida até que nenhuma troca seja feita, o que indica
  // que todos os elementos já estão na posição correta.
  for (i = 0; i < tamanho; i++) {
    trocou = false;
    for (j = 0; j < tamanho - 1; j++) {
      comparacoes = comparacoes + 1;
      // Quando o elemento da esquerda é maior, os dois valores são trocados.
      if (vetor[j] > vetor[j + 1]) {
        auxiliar = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = auxiliar;
        trocas = trocas + 1;
        trocou = true;
      }
    }
    // Sem trocas na varredura, o vetor está ordenado e o laço é encerrado.
    if (trocou == false) {
      i = tamanho;
    }
  }

  return { vetor: vetor, comparacoes: comparacoes, trocas: trocas };
}

module.exports = bubbleSort;
