//** El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).
//Este procedimiento recibe los mismos argumentos que el método map.//


/// Dado el siguiente objeto de arrays obtener los "attributes" en un solo array.
const users = [
  {userId: 1, userNmae: "Tom", attributes: ["Nice", "Cute"]},
  {userId: 2, userNmae: "Mike", attributes: ["lovely"]},
  {userId: 3, userNmae: "Nico", attributes: ["Nice", "Cool"]},
];

// Utilizando el "map" seguido del "flat"
const arrayAttributes = users.map(user => user.attributes).flat();
console.log(arrayAttributes);

// Utilizando el método "flatMap"
const arrayAttributes2 = users.flatMap(user => user.attributes);
console.log(arrayAttributes2);

////////////////////////////////////////////////////////////////////////////

////*** Teniendo los siguientes datos crear un array que tenga solo los "starDate". ***//////
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

// 1.Utilizamos Object.values para pasar el objeto a un array de arrays.
// 2.Utilizamos el flatMap para poder aplanar el array.
// 3.Retornamos los valores utlizando un map pasando el dato especifico que se necesita.
const newStartDay = Object.values(calendars).flatMap(item => {
  return item.map(date => date.startDate);
});
console.log(newStartDay);