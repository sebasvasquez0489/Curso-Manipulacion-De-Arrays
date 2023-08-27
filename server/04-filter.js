///*** Metodo ".filter", filtrar de un array las palabras mayores o iguales 6 letras. ***///

const words = ['spray', 'limit', 'elite', 'exuberant'];


//*FORMA TRADICIONAL*//
// Creamos una variable, utilizamos el for para recorrer el array y con el ".push" agregamos las palabras seleccionas.
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}
console.log("Original", words);
console.log("Nuevo tradicional", newArray );

// *Utilizando el ".filter"* //
//Creamos la variable, y accedemos al array con el ".filter", validamos la condicion y asi se agreagar las palabras seleccionadas.
const newArray2 = words.filter(item => item.length >= 6);
console.log("Original", words);
console.log("Nuevo con .filter", newArray2 );



////**** Filtrar todas las ordenes que hayan sido entregadas(delivered) y el total sea mayor o igual a 100 ***////
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]
const newArray3 = orders.filter(item => item.delivered && item.total >= 100 );
console.log(newArray3);


////*** Filtrar por especificacion de palabras ***///
//Creamos una variable asignandole una funcion que llevara el parametro "consulta" al cual se le agregara la especificación a consultar.

const newArray4 = (consulta) => {
  return orders.filter(item => {
    return item.customerName.includes(consulta)
  })
}
console.log(newArray4('ti'));