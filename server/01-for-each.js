//*** RECORRIENDO UN ARRAY DE LETRAS ***//

const letters = ["a", "b", "c"];

// Recorremos el Array con el "for" tradicional ***//
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("For", element);
}

// Recorremos el Array con el metodo "forEach" ***//
letters.forEach((item) => console.log("ForEach", item));
