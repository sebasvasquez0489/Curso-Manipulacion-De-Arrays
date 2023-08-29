////*** Metodo ".Find", Este metodo nos devuelve en el ARRAY solo el elemento especifico y en caso de un objeto devolvera el objeto completo que cumpla con la condicional mas no un Array como en el caso de ".filter" esa seria la diferecia ***/// Tener en cuenta que si no encuntra el elemento retornara un "Undefined".

/// En un ARRAY ///
const numbers = [1, 30, 41, 29, 50, 60]

// Utilizando "FOR" ////
let respuesta = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        break
    }
}

console.log("FOR", respuesta) // 41

/// Utilizando el metodo ".find"
const respuesta2 = numbers.find(item => item >= 40);
console.log("FIND", respuesta2); // 41


/// En un array de OBJETOS ////
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const respuesta3 = products.find(item => item.id === "🌭");
console.log(respuesta3);