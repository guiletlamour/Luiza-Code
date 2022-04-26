/**
 * Exercicio 1 - Refatorar nomes de variaveis e incrementar retorno de numeros impares
 */
function removeImpar(variable) {
  let odd = [];
  for (let entry of variable) {
    if (entry % 2 !== 0) {
        odd.push(entry);
    }
  }

  return odd;
}

console.log(removeImpar([3, 2, 41, 3, 34]));
