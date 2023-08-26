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

///*** 1.Teniendo en cuenta el array de objetos anterior imprima solo el total de cada uno. **///
//Creamos la variable recorremos el array y extraemos el valor indicado.
const totales = orders.map(item => item.total);
console.log(totales);


///*** 2.Teniendo en cuenta el array de objetos anterior insertar una nueva propiedad sin modificar el Array de Objetos original ***///
//Creamos la variable y recorremos el ARRAY. Para que no se modifique el ARRAY original Utilizamos el ".map" y el "spread operator ..." al momento de retornar los valores.
const newProperty = orders.map(item => {
  return {
    ...item,
    tax: .19
  };
});
console.log("Array Original", orders);
console.log("Array Nuevo2", newProperty);

