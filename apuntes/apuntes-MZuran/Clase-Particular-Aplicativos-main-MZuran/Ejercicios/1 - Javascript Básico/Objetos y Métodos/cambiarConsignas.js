// =====================
// CONFIGURACIÓN GLOBAL
// =====================

const ejercicio = {
  titulo: "Explorando objetos complejos",

  consigna: `
<strong>Importante:</strong> el código ya está comenzado, solo tenés que <strong>completar los console.log</strong> pedidos para acceder correctamente a cada dato del objeto <code>usuario</code>.<br/><br/>

Tu tarea es explorar un objeto con distintos niveles de profundidad (que incluye arrays, objetos dentro de objetos y métodos) para obtener la información correcta.<br/><br/>

Debés mostrar en consola los siguientes datos:<br/><br/>

<ul>
  <li>¿Cuál es el <strong>nombre del usuario</strong>?</li><br/>
  <li>¿Cuál es el <strong>nivel del primer proyecto activo</strong> del usuario?</li><br/>
  <li>¿Cuántas mascotas tiene el usuario?</li><br/>
  <li>¿Cuál es el <strong>nombre de la segunda mascota</strong>?</li><br/>
  <li>¿Cuál es el <strong>último número del historial de compras</strong>?</li><br/>
  <li>¿Cuál es el <strong>título del segundo curso</strong>?</li><br/>
  <li>Mostrá la <strong>definición del método</strong> <code>mostrarResumen</code> (sin invocarlo).</li><br/>
  <li>Mostrá en consola el resultado de invocar el método <code>mostrarResumen()</code>.</li><br/>
</ul>

<strong>Pistas útiles:</strong><br/><br/>
<ul>
  <li>Usá notación con puntos o corchetes: <code>objeto.propiedad</code> o <code>objeto["propiedad"]</code>.</li><br/>
  <li>Los arrays comienzan en índice 0: <code>array[0]</code>, <code>array[1]</code>, etc.</li><br/>
  <li>Recordá que los métodos se ejecutan con paréntesis: <code>objeto.metodo()</code>.</li>
</ul>
`,

  codigo: `

// La definición del objeto está en ejercicio.js

console.log("El nombre del usuario es " + usuario.nombre);
console.log("El nivel del primer proyecto activo del usuario es " + usuario.proyectos.activos[0].nivel);
console.log("El usuario tiene " + usuario.mascotas.length + " mascotas");
console.log("El nombre de la segunda mascota es " + usuario.mascotas[1].nombre);
console.log("El último número del historial de compras es " + usuario.historialCompras.compras[usuario.historialCompras.compras.length - 1]);
console.log("El título del segundo curso es " + usuario.cursos[1].titulo);
console.log("La definición del método mostrarResumen es:", usuario.mostrarResumen);
console.log("El resultado de invocar mostrarResumen() es:", usuario.mostrarResumen());
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
