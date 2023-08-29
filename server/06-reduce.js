////*** Metodo ".Reduce" , Reducir el array de numeros a un solo valor(sumas de numeros) ***/////

const arrayNumbers = [5,4,8,6,2];
let sum = 0;

// Solución com el ciclo for //
for (let index = 0; index < arrayNumbers.length; index++) {
  const number = arrayNumbers[index];
  sum = sum + number;
}
console.log("For tradicional", sum);


// Solución metod ".Reduce" //
const numberReduce = arrayNumbers.reduce((sum, number) => sum + number, 0);
console.log("Metodo .Reduce", numberReduce);