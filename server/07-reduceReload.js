////**** Dado un array de numeros realizar una especie de histograma, 
////**(validar cada cuanto se repite un elemento) ***///

const items = [1,2,3,4,3,4,2,4,0,4];


//Creamos una varible (answer) donde guardaremos nuestra logica.
//1.Utilizamos el .reduce sobre el array
//2.Realizamos la función(Callback)-ArrowFunction, pasandole los dos parametros el acumulador(obj) y el item obtenido de cada iteracion.
//Tener en cuenta de darle al acumulador su estado inicial.
//3.Validamos las condiciones e inicilizamos el estado del acumulador(obj)
//4.luego le sumamos a ese elemento(obj) + 1.
//5.Finalmente retornamos el objeto(obj).
const answer = items.reduce((obj, item)=>{
  if (!obj[item]) {
    obj[item] = 1;
  }else {
    obj[item] = obj[item] + 1
  }
  return obj
},{});//Estado acumulador//
console.log(answer);