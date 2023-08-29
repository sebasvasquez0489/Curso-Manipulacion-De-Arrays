
//*** Metodo "Some". Este metodo evalua si alguno cumple con la condicón. ***// 
// Dado un array de numeros validar si hay alguno que sea par.
const numbers = [1, 2, 5, 4, 7];


//*** Utilizando "FOR". ***//
//1.Inicializamos un variable en "false".
//2.Utilizamos el ciclo "for".
//3.Validamos la condición.
let pairNumber = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if(element % 2 ===0) {
    pairNumber = true;
    break;
  }
};
console.log(pairNumber);


//*** Utilizando el Metodo "Some". ***//
//1.Creamos la variable, la igualamos a numbers y aplicamos el .some
//2.Realizamos la validación de la condición dentro del callback(ArroFunction)

const pairNumber1 = numbers.some(item => item % 2 ===0);
console.log(pairNumber1);



