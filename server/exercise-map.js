//*** Tienes un array de números, tu reto es retornar los números de ese array multiplicados por dos. ***//

// Podemos solucionarlo creando una función llamada multiplyElements que recibe un parámetro de entrada que seria el array. Recorremos el array con el ".map" y asi nos retorna los nuevos valores.
// Input: [2, 4, 5, 6, 8]
// Output: [4, 8, 10, 12, 16]

function multiplyElements(array) {
  let multiplicacion = array.map(item => item * 2);
  return multiplicacion
}
console.log(multiplyElements([2, 4, 5, 6, 8]));


//Lo solucionamos creando una variable a la cual le pasamos un array de numeros y creamos la nueva variable igualando al array inicial y utilizando el ".map" para que nos regresara los valores multiplicados.

let number = [5,8,3,4];
const multiNumber = number.map(item => item * 2 );
console.log(multiNumber);