
//*** Metodo "Every". Este metodo evalua si todos cumplen con la condicón. ***// 
// Dado un array de numeros validar si todos son menores a 40.

const numbers = [1,30,25,29,35,13];

let solution = true;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    solution = false;
  }
}
console.log("Solucion for:", solution);

const solution2 = numbers.every(item => item <= 40);
console.log("solucion every:", solution2);