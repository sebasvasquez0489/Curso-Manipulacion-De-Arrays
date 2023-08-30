// Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado.

// Para solucionarlo vas a encontrar una función llamada filterByTerm que recibe los siguientes parámetros de entrada:

// array: Un array de strigs con palabras
// term: Un string con el término a buscar

//Input 1:
// let array = ["ana", "santi", "nico", "anastasia"]
// let term = "ana"
//Input 2:
//let array2 = ["ana", "santi", "nico", "anastasia"]
//let term2 = "xyz";

function filterByTerm(array, term) {
return array.filter(item => item.includes(term))
};
console.log("Input 1:", filterByTerm(["ana", "santi", "nico", "anastasia"], "ana")); // Ouput:["ana", "anastasia"]
console.log("Input 2:", filterByTerm(["ana", "santi", "nico", "anastasia"], )); //Output:[]
