// insertionSort.js - Algoritmo de ordenacao por insercao (Insertion Sort)
// Vai pegando os numeros e vai "enfiando" no lugar certo da parte ja ordenada.

function insertionSort(vetor) {
  var comparacoes = 0;
  var movimentacoes = 0;
  var tamanho = vetor.length;
  var i;
  var j;
  var auxiliar;
  var parar;

  for (i = 1; i < tamanho; i++) {
    auxiliar = vetor[i];
    j = i - 1;
    parar = false;
    // anda pra tras enquanto o numero da frente for maior que o auxiliar
    while (parar == false) {
      comparacoes = comparacoes + 1;
      if (j >= 0) {
        if (vetor[j] > auxiliar) {
          vetor[j + 1] = vetor[j];
          movimentacoes = movimentacoes + 1;
          j = j - 1;
        } else {
          parar = true; // condicao falsa, para de andar pra tras
        }
      } else {
        parar = true; // chegou no comeco do vetor
      }
    }
    vetor[j + 1] = auxiliar;
    movimentacoes = movimentacoes + 1;
  }

  return { vetor: vetor, comparacoes: comparacoes, trocas: movimentacoes };
}

module.exports = insertionSort;
