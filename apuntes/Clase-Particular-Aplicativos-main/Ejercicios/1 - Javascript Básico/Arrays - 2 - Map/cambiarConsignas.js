// =====================
// CONFIGURACIÓN GLOBAL
// =====================

const ejercicio = {
  titulo: "Array.map",

  consigna:
    `
<strong>Importante:</strong> el código ya está comenzado, solo tenés que <strong>completar las partes marcadas</strong> dentro del uso del método <code>map()</code>.<br/><br/>

En este ejercicio vas a practicar cómo transformar un array de objetos usando <code>map()</code>.<br/>
Cada persona tiene un nombre y una lista de notas, y tu tarea es devolver un nuevo array de personas donde cada una tenga una nueva propiedad llamada <code>promedio</code>.<br/><br/>

<strong>Vas a reutilizar la función <code>calcularPromedio()</code> del ejercicio anterior</strong> para obtener el promedio de las notas de cada persona.<br/><br/>

<ul> <li>Usá <code>map()</code> para recorrer el array de personas.</li><br/> <li>En cada iteración, devolvé un nuevo objeto que contenga todas las propiedades originales de la persona, más una nueva key <code>promedio</code> calculada usando <code>calcularPromedio(persona.notas)</code>.</li><br/> <li>Guardá el resultado del <code>map()</code> en una nueva variable llamada <code>personasConPromedio</code>.</li><br/> <li>Mostrá en consola el nuevo array resultante.</li> </ul>

<strong>Pistas útiles:</strong><br/><br/>

<ul> 
<li><code>map()</code> recibe un callback y devuelve un <em>nuevo array</em>, no modifica el original.</li><br/> 
<li>El callback del <code>map()</code> recibe los elementos de la lista y devuelve un nuevo elemento de lista. <br/> En este ejercicio el callback deberá devolver el mismo objeto con la característica de que debe tener una nueva <code>key</code> llamada promedio.</li><br/> 
<li>Para agregar propiedades a un objeto, podés hacer lo siguiente:<br/> 
<code>{<br/>let nuevoObjeto = objetoOriginal <br/> nuevoObjeto.nuevaClave = nuevoValor <br/> return nuevoObjeto<br/>}</code></li><br/> 
<li>Recordá que la función <code>calcularPromedio()</code> ya está disponible y recibe una lista de números.</li> 
</ul>
`,

  codigo: `
const personas = [
  { nombre: "Ana", notas: [8, 9, 10, 7, 9] },
  { nombre: "Bruno", notas: [6, 5, 7, 8, 6] },
  { nombre: "Carla", notas: [10, 9, 10, 10, 9] },
  { nombre: "Diego", notas: [4, 6, 5, 7, 6] },
  { nombre: "Elena", notas: [9, 8, 9, 10, 9] },
  { nombre: "Fernando", notas: [3, 4, 5, 6, 5] },
  { nombre: "Lucía", notas: [7, 8, 8, 9, 7] },
  { nombre: "Martín", notas: [5, 6, 6, 7, 6] },
  { nombre: "Nadia", notas: [10, 10, 9, 10, 10] },
  { nombre: "Pablo", notas: [2, 4, 3, 5, 4] }
];

function calcularPromedio(listaNumeros) {
  let suma = 0

  listaNumeros.forEach(x => {
    suma = suma + x
  });

  return suma/listaNumeros.length
}

nuevaLista = personas.map(
    (estudiante) => {
        let estudianteMapeado = estudiante
        estudianteMapeado.promedio = calcularPromedio(estudianteMapeado.notas)
        return estudianteMapeado
    }
)

console.log("La lista con promedios incluídos: ", nuevaLista)  
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
