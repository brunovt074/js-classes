// =====================
// CONFIGURACIÓN GLOBAL
// =====================

const ejercicio = {
  titulo: "Ejercicio 1: Comparadores e if",

  consigna:
    `
Modificando el archivo <code>ejercicio.js</code>:<br/><br/>
Armar un script el cual le pida al usuario de la página que ingrese un número. <br/>
Dependiendo el número ingresado, la salida en consola deberá mostrar si ese número es: <br/>
<ul>
  <li>Mayor a 10</li>
  <li>Menor a 10</li>
  <li>Igual a 10</li>
</ul>
Para resolver el ejercicio, deberás usar los operadores de comparación, la cláusula <code>if</code>,<br/>
<code>else</code> y opcionalmente la cláusula <code>else if</code>
`,

  codigo: `
const numero = Number(prompt("Ingresa un número:"));

if (numero > 10) {
  console.log("El número es mayor que 10");
} else if (numero < 10) {
  console.log("El número es menor que 10");
} else {
  console.log("El número es igual a 10");
}
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
