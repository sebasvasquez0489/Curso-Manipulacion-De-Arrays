//**** Validar si todos los integrantes del equipo tiene una edad(age) menor a 15 años ***///

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const correctAge = team
  .map(item => item.age)
  .every(item => item <= 15);

console.log("Tu team cumple? :", correctAge);

