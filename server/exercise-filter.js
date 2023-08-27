//** Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

const strings = ['telescopio', 'aro', 'automovil', 'sol', 'estudiante', 'casa', 'dos'];


//Podemos solucionarlo creando una variable y filtrando el ARRAY proporcionado y revisar que la condición se cumpla.
const newArray = strings.filter(item => item.length >= 4);
console.log("Variable", newArray);


//También se puede solucionar creando una funcion a la cual le pasamos un parámetro el cual va a ser el ARRAY, luego retornamos el ARRAY(string) y lo filtramos validando la condición.
function newArray1(string) {
  return string.filter(item => item.length >= 4)
};
console.log("Funcion",newArray1(['telescopio', 'aro', 'automovil', 'sol', 'estudiante', 'casa', 'dos']));