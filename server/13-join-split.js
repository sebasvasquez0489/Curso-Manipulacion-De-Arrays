////***  Método ".join" une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía. ***///

// Se debe evaluar si existe elementos null o undefined
const elements = ["hola", null, "como", "estas"]

// Utilizando FOR 
//Si utilizamos la estructura for para recrear el método join, necesitaremos una variable con el valor acumuladora con un string vacío y otra con el valor del separador.
let acumulator = ""
const separator = "/"
  for (let i = 0; i<elements.length; i++){
    const element = elements[i] ?? ""
    if(i !== elements.length-1){
      acumulator += element + separator
    }else{
      acumulator += element
    }
  }
  console.log(acumulator) // 'hola//como/estas'

// Utilizando métod ".JOIN"
//Con el método join solamente debemos establecer el separador de cada elemento como argumento.
const resultado = elements.join("/")
console.log(resultado) // 'hola//como/estas'

/////////////////////////////////////////////////////////////////

////*** Método ".split" de strings, El método split de strings, es lo contrario que el método join, consiste en separar un string en substrings, indicando un valor a separar. Este método retornará un array de los elementos separados. ***////
//Este método recibe dos argumentos:
// 1.El separador que especifica el conjunto de caracteres a separar en substrings.
// 2.El límite de elementos separados a retornar.

const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

console.log(cadena.split(" ")); 
console.log(cadena.split(", ")); 
console.log(cadena.split("JavaScript"));
console.log(cadena.split(" ", 3));


///////////////////////////////////////////////////////////////////////////

////**** Utilizando los dos Métodos ".join y .split" ****////
//Teniendo un string , separarlo por cada palabra y unirlo mediante el simbolo (-) y que todo quede en minusculas como si se estuviera generando una url
const titleString = 'Curso de manipulación de arrays';
const urlFinal = titleString.split(' ').join('-').toLowerCase();
console.log(urlFinal);