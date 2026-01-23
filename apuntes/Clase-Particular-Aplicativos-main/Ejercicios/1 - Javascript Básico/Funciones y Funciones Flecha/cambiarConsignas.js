// =====================
// CONFIGURACIÓN GLOBAL
// =====================

const ejercicio = {
  titulo: "Ejercicio 2: Funciones y Funciones flecha",

  consigna:
    `
Modificando el archivo <code>ejercicio.js</code>:<br/><br/>
Crear las siguientes tres funciones:
<ul>
  <li>Una función declarada llamada <strong>duplicar</strong></li>
  <li>Una función flecha llamada <strong>mitad</strong></li>
  <li>Una función flecha llamada <strong>cambiarSigno</strong></li>
</ul>

Las tres funciones sólo deben <strong>recibir un sólo parámetro</strong> y además, <strong>la única línea dentro del bloque de cada función debe comenzar con <code>return</code></strong><br/>
Por ejemplo, <code>(x) => {return x + 1}</code> es una función <i>(sin nombre y no almacenada en ninguna variable)</i> que cumple estos requisitos.<br/><br/>

La función <strong>mitad</strong> debe tener todos los componentes opcionales de la función flecha vistos en clase. <br/>
La función <strong>cambiarSigno</strong> debe tener la mínima cantidad de componentes de la función flecha vistos en la diapositiva de la función flecha con retorno implícito.<br/><br/>

<strong>NOTA:</strong> Para calcular los diferentes números pedidos en la salida, sólo se deben usar las 3 funciones que hicimos antes. <br/><br/>

Al correr el script, se le debe hacer un prompt al usuario para que ingrese un número y se debe mostrar en consola lo siguiente: <br/>
<ul>
  <li>Un string que diga <i>"El número ingresado es "</i> y después ponga el número correspondiente
  
  <li>La <strong>declaración</strong> de duplicar</li>
  <li>La <strong>invocación</strong> de duplicar con el número ingresado como parámetro</li>
  
  <li>La <strong>declaración</strong> de mitad</li>
  <li>La <strong>invocación</strong> de mitad con el número ingresado como parámetro</li>
  
  <li>La <strong>declaración</strong> de cambiarSigno</li>
  <li>La <strong>invocación</strong> de cambiarSigno con el número ingresado como parámetro</li>
  <li>Un string que diga <i>"El número multiplicado por -8 es "</i> y después ponga el número correspondiente</i></li>
</ul>
`,

  codigo: `
const numero = Number(prompt("Ingresa un número:"));

function duplicar(x) {
    return x * 2
}

const mitad = (x) => {
    return x/2
}

const cambiarSigno = x => 
    x * -1

console.log("El número ingresado es " + numero)

console.log(duplicar)
console.log(duplicar(numero))

console.log(mitad)
console.log(mitad(numero))

console.log(cambiarSigno)
console.log(cambiarSigno(numero))

console.log("El número multiplicado por -8 es " + duplicar(duplicar(duplicar(cambiarSigno(numero)))))
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
