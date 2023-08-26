//Tienes un array de objetos que representan datos de productos
const products = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 656,
    stock: 20,
  },
]

//*** Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base, debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales. Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124. ***/

// 1.Creamos una constante de la nueva propiedad y esta sera igual al ARRAY que sera recorrido con el ".map"
// 2.Retornamos el valor de la nueva propiedad utilizando "Spread Operator ..." para no modificar el ARRAY original.
// 3.Agregamos el valor a la nueva propiedad utilizando el "Math.trunc()"(devuelve la parte entera de un numero removiendo cualquier dígito decimal (dígitos situados después de la coma)."
// 4.Multiplicamos el valor de la propiedad por el 19%.
const newProperty = products.map(item => {
  return {
    ...item,
    taxes: Math.trunc(item.price * 0.19)
  };
});
console.log(newProperty);

