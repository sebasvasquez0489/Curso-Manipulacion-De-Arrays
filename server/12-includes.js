////*** Metodo ".Includes", determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente. Este metodo no trabaja con arrowFunction, solo neceita parasrle el elemento que necesitamos encontrar. ***////


//Validar si el elemento "cat" se encuentra en el array.
const pets = [ "cat", "dog", "bat" ]

let includeInArray = false

// Utilizando el FOR.
for (let i = 0; i < pets.length; i++){
    const item = pets[i]
    if (item === "cat"){
        includeInArray = true
        break
    }
}
console.log("For =>", includeInArray) // true

// Utilizando el .INCLUDES
const elementArray = pets.includes('cat');
console.log("Includes =>", elementArray);
/////////////////////////////////////////

//*** Ejemplos utilizando el método includes **//
// El método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.

//Utilizando strings
const saludo = "Hola mundo"

console.log(saludo.includes("Hola")); // true
console.log(saludo.includes("Mundo")); // false
console.log(saludo.includes(" ")); // true
console.log(saludo.includes("Hola", 1)); // false
console.log(saludo.includes("mundo", -5)); // true

// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

console.log(frutas.includes("manzana")); // true
console.log(frutas.includes("Pera")); // false
console.log(frutas.includes("sandía")); // false
console.log(frutas.includes("manzana", 1)); // false
console.log(frutas.includes("piña", -1)); // false
console.log(frutas[0].includes("man")); // true