const letters = ['a', 'b', 'c'];
const newArray = [];

// Recorremos el array con "for" de forma tradicional y agreamos el emoji con el metodo ".push" al nuevo Array //
for(let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + "😎");
}
console.log('Original', letters);
console.log('Nuevo con "for" y .PUSH', newArray);
 // Realizamos la misma operación utilizando el metodo ".map", el cual nos devuelve un nuevo Array //
 const newArray1 = letters.map(item => item + "😎");
 console.log('Nuevo con .MAP', newArray1);