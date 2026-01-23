// =====================
// CONFIGURACIÓN GLOBAL
// =====================

const ejercicio = {
  titulo: "Ejercicio 4: forEach y promedio",

  consigna: `<strong>Importante:</strong> el código ya está comenzado, solo tenés que <strong>completar las partes marcadas</strong> dentro de la función <code>calcularPromedio()</code>.<br/><br/>

En este ejercicio vas a practicar el uso del método <code>forEach()</code> para recorrer un array y realizar operaciones con sus elementos.<br/><br/>

Tu tarea es crear una función llamada <code>calcularPromedio(listaNumeros)</code> que reciba una lista de números y devuelva su promedio.<br/><br/>

<ul>
  <li>Dentro de la función, declar&aacute; una variable para acumular la suma de todos los elementos.</li><br/>
  <li>Us&aacute; <code>forEach()</code> para recorrer el array y sumar cada número al acumulador.</li><br/>
  <li>Al final, devolv&eacute; el resultado de la suma dividido por la cantidad de elementos de la lista.</li><br/>
  <li>Mostr&aacute; en consola el promedio resultante.</li>
</ul>

<strong>Pistas útiles:</strong><br/><br/>
<ul>
  <li>Recordá que <code>array.forEach()</code> recibe una función con un parámetro, que representa el elemento actual del array.</li><br/>
  <li>Podés declarar la suma inicial como <code>let suma = 0;</code> antes de recorrer el array.</li><br/>
  <li>El promedio se calcula como <code>suma / listaNumeros.length</code>.</li>
</ul>

<strong>Ejemplo de uso de forEach:</strong><br/>
<code>
const numeros = [1, 2, 3];<br/>
numeros.forEach((n) => {<br/>
&nbsp;&nbsp;console.log(n); // Muestra 1, luego 2, luego 3<br/>
});
</code>
`,

  codigo: `
// Ejemplo de listas de números
const lista1 = [5, 10, 15];
const lista2 = [2, 4, 6, 8, 10];
const lista3 = [1, 1, 1, 1];

function calcularPromedio(listaNumeros) {
  let suma = 0

  // Usando listaNumeros.forEach(), debemos ir sumando los números a suma

  listaNumeros.forEach((numero) => {
    suma = suma + numero
  });

  return suma/listaNumeros.length
}

console.log("Promedio de lista1:", calcularPromedio(lista1)); // debería dar 10
console.log("Promedio de lista2:", calcularPromedio(lista2)); // debería dar 6
console.log("Promedio de lista3:", calcularPromedio(lista3)); // debería dar 1
  `
};

if (ejercicio) {
  document.title = ejercicio.titulo;
  document.getElementById("tituloEjercicio").textContent = ejercicio.titulo;
  document.getElementById("textoConsigna").innerHTML = ejercicio.consigna;
  document.getElementById("codigoEjercicio").textContent = ejercicio.codigo;
} else {
  console.error("Ejercicio no encontrado en cambiarConsignas.js");
}
