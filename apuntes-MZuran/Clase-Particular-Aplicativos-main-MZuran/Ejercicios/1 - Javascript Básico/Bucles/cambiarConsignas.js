// =====================
// CONFIGURACIÓN GLOBAL
// =====================

const ejercicio = {
  titulo: "Ejercicio 3: for, while y do...while",

  consigna: `<strong>Importante:</strong> el código ya está comenzado, solo tenés que <strong>completar las partes marcadas</strong> dentro de los tres bucles y agregar los <code>console.log</code> pedidos.<br/><br/>

El archivo ya contiene la función <code>esPar(numero)</code>, que devuelve <code>true</code> si el número es par y <code>false</code> si es impar.<br/>
No es necesario modificar esta función; simplemente usala dentro de tus condiciones.<br/><br/>

Tu tarea es usar los tres tipos de bucles y seguir estas indicaciones:<br/><br/>

<ul>
  <li>
    El <strong>bucle for</strong> debe repetir la cantidad de veces indicada por el usuario, 
    mostrando en consola un mensaje con el número de repetición.
  </li><br/>
  <li>
    El <strong>bucle while</strong> debe recorrer desde 0 hasta el número ingresado, 
    pero solo mostrar un mensaje en consola si el número de iteración es <strong>par</strong>. 
    Usá <code>esPar</code> dentro del bucle.
  </li><br/>
  <li>
    El <strong>bucle do...while</strong> debe hacer lo mismo, pero solo mostrar un mensaje si el número de iteración es <strong>impar</strong>. 
    Usá <code>!esPar</code> dentro del bucle.
  </li><br/>
</ul>

El objetivo es notar en qué caso los bucles <strong>while</strong> y <strong>do...while</strong> se comportan diferente.<br/>
Probalos con un número par y otro impar para ver la diferencia en la ejecución.<br/>
¿El do...while se comporta raro en alguna circunstancia?<br/><br/>

<strong>Recordatorio:</strong><br/><br/>
<ul>
  <li><code>!</code> (NOT) niega una condición.  
  <br/>Ejemplo: <code>!true</code> → devuelve <code>false</code>.  
  <br/>Ejemplo: <code>!esPar(4)</code> → <code>false</code>, porque 4 sí es par.  
  <br/>Ejemplo: <code>!esPar(5)</code> → <code>true</code>, porque 5 no es par.</li><br/>

  <li><code>&&</code> (AND) sirve para que se cumplan dos condiciones al mismo tiempo.  
  <br/>Ejemplo: <code>while (numero > 1 && numero < 10)</code></li>
</ul>
`,

  codigo: `
function esPar(numero) {
  return numero % 2 === 0;
}

const repeticiones = Number(prompt("Ingresa un número que indique cuántas veces repetir:"));

console.log("--- for ---");
for (let i = 0; i < repeticiones; i++) {
  console.log("Soy la repetición del for número " + i);
}

console.log("--- while ---");
let j = 0;
while (j < repeticiones) {
  if (esPar(j)) {
    console.log("Soy la repetición del while número " + j);
  }
  j++;
}

console.log("--- do...while ---");
let k = 0;
do {
  if (!esPar(k)) {
    console.log("Soy la repetición del do...while número " + k);
  }
  k++;
} while (k < repeticiones);
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
