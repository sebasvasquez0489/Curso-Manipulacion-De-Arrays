//*** Metodo ".findIdex" , este metodo nos regresara la posicion donde se encuentre el elemento, pero si no encuentra el elemnto retornara un -1. */

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

const respuesta = products.findIndex(item => item.id === "🌭");
console.log(respuesta);