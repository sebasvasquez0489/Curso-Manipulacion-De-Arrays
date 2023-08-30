////*** El método ".concat" es inmutable y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos.***////

const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}
const respuesta = elements.concat(otherElements);
const respuesta2 = [...elements, ...otherElements];
const respuesta3 = [...elements, ...'random'];
 console.log('FOR=>', newArray);
 console.log('CONCAT=>', respuesta);
 console.log('SPREAD-OPERATOR', respuesta2);
 console.log(respuesta3);

 elements.push(...otherElements);
 console.log('ELEMENTS=>', elements);

 //////////////////////////////////////////////////////////

 const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const result1 = numbers1.concat("hola", "mundo")
const result2 = numbers1.concat(numbers2)
const result3 = numbers1.concat(numbers2, "hola")
const result4 = numbers1.concat(numbers2, numbers3)

console.log(result1); // [ 1, 2, 3, 4, 'hola', 'mundo' ]
console.log(result2); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(result3); // [ 1, 2, 3, 4, 5, 6, 7, 8, 'hola' ]
console.log(result4); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]