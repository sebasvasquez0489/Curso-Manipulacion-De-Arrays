//** El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.
const arrayPush = [1,2,3]
array.push(4,5)
console.log(arrayPush) // [ 1, 2, 3, 4, 5 ]

/////////////////////////////////////

//** El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.
const arrayUnshift = [3,4,5]
array.unshift(1,2)
console.log(arrayUnshift) // [ 1, 2, 3, 4, 5 ]

/////////////////////////////////////

//** El método pop extrae el elemento del final del array original. El método no recibe ningún argumento. Retorna el elemento extraído .
const arrayPop = [1,2,3,4]
const lastElement = array.pop()
console.log(lastElement) // 4
console.log(arrayPop) // [ 1, 2, 3 ]

/////////////////////////////////////

//** El método shift extrae el elemento del inicio del array original. El método no recibe ningún argumento. Retorna el elemento extraído.
const arrayShiff = [1,2,3,4]
const firstElement = arrayShiff.shift()
console.log(firstElement) // 1
console.log(arrayShiff) // [ 2, 3, 4 ]

/////////////////////////////////////

//** El método splice extrae uno o varios elementos del array original a partir del índice y los reemplaza con otro elemento especificado como argumento. Retorna un array con los elementos extraídos.

// El método splice recibe tres argumentos:
// El índice donde comenzará a cambiar el array.
// La cantidad de elementos que serán reemplazados.
// Uno o varios elementos que reemplazarán a los originales del array.

const array = [1,2,3,4]
const elements = array.splice(2,1,"tres")
console.log(elements) // [3]
console.log(array) // [ 1, 2, 'tres', 4 ]

const array2 = [1,2,3,4]
const elements2 = array2.splice(1,2,"dos", "tres")
console.log(elements2) // [ 2, 3 ]
console.log(array2) // [ 1, 'dos', 'tres', 4 ]