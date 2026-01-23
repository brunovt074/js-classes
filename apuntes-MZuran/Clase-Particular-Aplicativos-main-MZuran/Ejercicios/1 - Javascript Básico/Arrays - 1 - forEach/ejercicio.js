// Ejemplo de listas de números
const lista1 = [5, 10, 15];
const lista2 = [2, 4, 6, 8, 10];
const lista3 = [1, 1, 1, 1];

function calcularPromedio(listaNumeros) {
  let suma = 0

  // Usando listaNumeros.forEach(), debemos ir sumando los números a suma

  return suma/listaNumeros.length
}

console.log("Promedio de lista1:", calcularPromedio(lista1)); // debería dar 10
console.log("Promedio de lista2:", calcularPromedio(lista2)); // debería dar 6
console.log("Promedio de lista3:", calcularPromedio(lista3)); // debería dar 1
