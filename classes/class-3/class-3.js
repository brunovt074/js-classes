/*
📅 Clase 3: Dándole Vida a la Web (DOM y Eventos)
Duración: 1 Hora
Foco: Dejar la consola, manipular el HTML en vivo y leer datos del usuario de forma profesional.
*/

/* ======================================================
Parte 1: El DOM (El Panel de Control)
====================================================== */

/*
1. Explicación (Usando la Opción A - Directa)

Hasta ahora, JavaScript vivía en una "caja negra" (la consola).
Hoy vamos a conectarlo con la página real.

Para esto existe el DOM.
Básicamente, el navegador nos regala una variable llamada document.
Adentro de document está toda nuestra web.

Para modificar algo, necesitamos dos pasos:
• Seleccionar: Usaremos document.getElementById("id"). Es como pescar un elemento del HTML para guardarlo en una variable.
• Modificar: Una vez pescado cambiar sus propiedades (texto, color, etc.)., usamos .innerText para cambiar su texto o .innerHTML si queremos meter HTML
*/

/*
Ejemplo
Mostramos cómo cambiar un título estático.
HTML:
<h1 id="titulo">Bienvenidos</h1>
*/

// 1. SELECCIONAR
const elementoTitulo = document.getElementById("titulo");

// 2. MODIFICAR
elementoTitulo.innerText = "¡Hola desde JavaScript!";

/* ======================================================
📝 Ejercitación 1
====================================================== */

/*
Consigna:
En tu HTML pon un párrafo vacío <p id="estado"></p>.
Desde JavaScript, selecciona ese párrafo y haz que aparezca el texto:
"Sistema cargado correctamente".
*/

/* --- SOLUCIÓN EJERCICIO 1 --- */

// Seleccionamos el elemento
const parrafoEstado = document.getElementById("estado");

// Modificamos su texto
parrafoEstado.innerText = "Sistema cargado correctamente";

/* ======================================================
Paso 2: Eventos (El Oído del Código)
====================================================== */

/*
1. Explicación

El DOM por sí solo es estático.
Para que reaccione, necesitamos Eventos.

• addEventListener: función que se queda escuchando
• click: el evento rey
• Callback: función flecha que se ejecuta cuando ocurre el evento
*/

/*
Ejemplo
HTML:
<button id="btnLanzar">Lanzar Acción</button>
*/

const botonLanzar = document.getElementById("btnLanzar");

botonLanzar.addEventListener("click", () => {
    alert("¡Hiciste click!");
});

/* ======================================================
📝 Ejercitación 2
====================================================== */

/*
Consigna:
Crea un botón en HTML con el texto "Modo Oscuro".
En JS, haz que al hacer click cambie el color de fondo del body a negro.
Pista: document.body.style.backgroundColor = "black";
*/

/* --- SOLUCIÓN EJERCICIO 2 --- */

const botonModo = document.getElementById("btnModo");

botonModo.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // opcional
});

/* ======================================================
Paso 3: Inputs (Reemplazando al Prompt)
====================================================== */

/*
Para leer lo que escribe un usuario usamos <input>.

Los inputs no usan innerText.
Guardan el valor en la propiedad .value.

IMPORTANTE:
El .value debe leerse DENTRO de la función del click.
Si lo leemos afuera, estará vacío porque el código corre apenas carga la página 
y el usuario todavía no escribió nada.
*/

/*
Ejemplo
HTML:
<input type="text" id="inputNombre" placeholder="Tu nombre">
<button id="btnSaludar">Saludar</button>
*/

const inputNombre = document.getElementById("inputNombre");
const botonSaludar = document.getElementById("btnSaludar");

botonSaludar.addEventListener("click", () => {
    // 1. Guardo lo que escribió el usuario EN ESTE MOMENTO
    const nombre = inputNombre.value;
    // 2. Lo uso
    alert("Hola " + nombre);
});

/* ======================================================
📝 Ejercitación 3
====================================================== */

/*
Consigna:
Crea un input numérico y un botón "Duplicar".
Al hacer click, muestra un alert con el número ingresado multiplicado por 2.
*/

/* --- SOLUCIÓN EJERCICIO 3 --- */

const inputNumero = document.getElementById("inputNumero");
const btnDuplicar = document.getElementById("btnDuplicar");

btnDuplicar.addEventListener("click", () => {
    // 1. Capturamos el valor. OJO: Los inputs siempre devuelven TEXTO.
    // Es buena práctica transformarlo a número con Number() o parseInt()
    const valorEscrito = Number(inputNumero.value);

    // 2. Operamos y mostramos
    const resultado = valorEscrito * 2;
    alert("El doble es: " + resultado);
});

/* ======================================================
Parte 4: Práctica Integradora (Calculadora de Daño)
====================================================== */

/*
Vamos a crear una pequeña herramienta para un juego. Aquí unimos: Variables, Selectores, Eventos y Lógica.
Escenario: "Tenemos un monstruo con 100 de vida.
Vamos a crear un panel donde el usuario ingrese cuánto daño le hace el ataque,
y el sistema calcule y muestre cuánta vida le queda."
*/

/*
HTML Base:

<div class="juego">
    <h3>Monstruo Final</h3>
    <p>Vida actual: <span id="vidaTotal">100</span></p>
    <input type="number" id="inputDano">
    <button id="btnAtacar">¡ATACAR!</button>
    <p id="mensajeFinal"></p>
</div>
*/

/*
Consigna:
    1. En JS, selecciona los 4 elementos (input, botón, span de vida y párrafo de mensaje).
    2. Crea una variable global (fuera del click) let vida = 100.
    3. Escucha el click del botón.
    4. Dentro del click:
        ◦ Captura el .value del input.
        ◦ Resta ese valor a la variable vida.
        ◦ Actualiza el texto del span con la nueva vida.
        ◦ Desafío: Si la vida es menor o igual a 0, escribe "¡Ganaste!" en el mensaje final.
*/

/* --- SOLUCIÓN INTEGRADORA --- */

// Selectores
const inputDano = document.getElementById("inputDano");
const btnAtacar = document.getElementById("btnAtacar");
const spanVida = document.getElementById("vidaTotal"); // El número a cambiar
const mensajeFinal = document.getElementById("mensajeFinal");

// Estado inicial
let vidaActual = 100;

// Evento
btnAtacar.addEventListener("click", () => {
    // A. Leer el daño (parseInt asegura que sea número y no texto)
    const dano = parseInt(inputDano.value);
    // B. Lógica Matemática
    vidaActual = vidaActual - dano;
    // C. Actualizar el HTML (Renderizar)
    spanVida.innerText = vidaActual;

    // D. Condicional de Victoria
    if (vidaActual <= 0) {
        spanVida.innerText = "0"; // Para que no muestre números negativos
        mensajeFinal.innerText = "¡MONSTRUO ELIMINADO!";
        mensajeFinal.style.color = "green";
        boton.disabled = true;  // Desactivamos el botón para que no siga atacando
    }
});
