// ordenacao.js - arquivo principal, chama os 3 algoritmos e monta a tabela
var bubbleSort = require('./bubbleSort.js');
var selectionSort = require('./selectionSort.js');
var insertionSort = require('./insertionSort.js');

// vetor de teste da atividade
var vetor = [8, 3, 5, 1, 9, 6, 2, 7, 4];

// funcao auxiliar so pra mostrar um vetor bonito no console (nao ordena nada)
function mostrar(v) {
  var texto = '[';
  var i;
  for (i = 0; i < v.length; i++) {
    texto = texto + v[i];
    if (i < v.length - 1) {
      texto = texto + ', ';
    }
  }
  texto = texto + ']';
  return texto;
}

// funcao que imprime o resultado de um algoritmo
function executar(nome, funcao) {
  var copia = [];
  var i;
  var resultado;

  // copia o vetor original porque o algoritmo mexe nele
  for (i = 0; i < vetor.length; i++) {
    copia[i] = vetor[i];
  }

  resultado = funcao(copia);

  console.log('Algoritmo: ' + nome);
  console.log('');
  console.log('Original:');
  console.log(mostrar(vetor));
  console.log('');
  console.log('Ordenado:');
  console.log(mostrar(resultado.vetor));
  console.log('');
  console.log('Comparacoes: ' + resultado.comparacoes);
  console.log('Trocas: ' + resultado.trocas);
  console.log('---------------------------------------------');
  console.log('');

  return resultado;
}

var rBubble = executar('Bubble Sort', bubbleSort);
var rSelection = executar('Selection Sort', selectionSort);
var rInsertion = executar('Insertion Sort', insertionSort);

// monta a tabela comparativa pedida na atividade
console.log('Tabela de comparacao');
console.log('');
console.log('Algoritmo        | Comparacoes | Trocas/Movimentacoes');
console.log('Bubble Sort      | ' + rBubble.comparacoes + '           | ' + rBubble.trocas);
console.log('Selection Sort   | ' + rSelection.comparacoes + '           | ' + rSelection.trocas);
console.log('Insertion Sort   | ' + rInsertion.comparacoes + '           | ' + rInsertion.trocas);
