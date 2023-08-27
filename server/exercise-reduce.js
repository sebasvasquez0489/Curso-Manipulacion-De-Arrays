//*** Dado el siguiente array de objetos , se desea saber cuantos clase de level hay  */
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

//Creamos nuestra variable.
//Utilizamos un .map para extraer los datos puntuales (level)
//Concatenamos con el metodo .reduce

const solution = data
.map(item => item.level)
.reduce((obj, item)=>{
  if (!obj[item]) {
    obj[item] = 1;
  }else {
    obj[item] = obj[item] + 1
  }
  return obj
},{});
 console.log(solution);


 //** Dado un array de numeros validar el rango de elementos que hay entre ciertos numeros, (entre 1 y 5 - 6 y 10 - 11 y 15 **//

// Se crea un arreglo vacío llamado "list"
const list = [];

// Se utiliza un ciclo "for" para generar 20 números aleatorios entre 0 y 10 y agregarlos al arreglo "list"
for (let i = 0; i < 20; i++) {
  list.push(Math.floor(Math.random() * 11));
}

// Se imprime el arreglo "list" en la consola
console.log('array inicial', list);

// Se utiliza la función "reduce" para contar la cantidad de números que están en los rangos '1-4', '5-8' y '9-10'
const resp2 = list.reduce(
  (obj, value) => {
    if (value < 5) obj['1-4'] += 1;
    else if (value < 9) obj['5-8'] += 1;
    else obj['9-10'] += 1;

    return obj;
  },
  {
    '1-4': 0,
    '5-8': 0,
    '9-10': 0,
  }
);

// Se imprime el objeto "resp2" en la consola
console.log(resp2);