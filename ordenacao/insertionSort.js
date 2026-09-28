// Implementa o algoritmo de ordenação por inserção (Insertion Sort).
// O vetor recebido é ordenado em ordem crescente e devolvido junto com
// a quantidade de comparações e de movimentações realizadas no processo.

function insertionSort(vetor) {
  var comparacoes = 0;
  var movimentacoes = 0;
  var tamanho = vetor.length;
  var i;
  var j;
  var auxiliar;
  var parar;

  // Cada elemento é retirado da sua posição e deslocado para trás,
  // até que seja encontrada a posição correta no trecho já ordenado.
  for (i = 1; i < tamanho; i++) {
    auxiliar = vetor[i];
    j = i - 1;
    parar = false;
    // anda pra tras enquanto o numero da frente for maior que o auxiliar
    while (parar == false) {
      comparacoes = comparacoes + 1;
      if (j >= 0) {
        // Se o elemento anterior for maior, ele cede a posição e a busca continua.
        if (vetor[j] > auxiliar) {
          vetor[j + 1] = vetor[j];
          movimentacoes = movimentacoes + 1;
          j = j - 1;
        } else {
          parar = true; // Condição falsa, a posição correta já foi encontrada.
        }
      } else {
        parar = true; // O início do vetor foi alcançado.
      }
    }
    vetor[j + 1] = auxiliar;
    movimentacoes = movimentacoes + 1;
  }

  return { vetor: vetor, comparacoes: comparacoes, trocas: movimentacoes };
}

module.exports = insertionSort;
