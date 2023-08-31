//***  El método flat es inmutable que consiste en retornar un array donde los sub-arrays han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays a una sola dimensión. **//
// Este procedimiento recibe un argumento:
// La profundidad del aplanamiento, por defecto, tiene un valor de 1. Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.


//*Teniendo un array de varios arrays(matriz) aplanarlo en unos solo*//
const matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const newArray = [];

// Utilizando FOR
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < matriz.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}
console.log("FOR=>", newArray);

// Utilizando método FLAT
const respuesta = matriz.flat(3);
console.log("FLAT=>", respuesta);