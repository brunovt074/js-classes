const elementoTitulo = document.getElementById("titulo");
elementoTitulo.innerText = "¡Hola desde JavaScript!";

const parrafoEstado = document.getElementById("estado");
parrafoEstado.innerText = "Sistema cargado correctamente";

const botonLanzar = document.getElementById("btnLanzar");
botonLanzar.addEventListener("click", () => {
    alert("¡Hiciste click!");
});

const botonModo = document.getElementById("btnModo");
botonModo.addEventListener("click", () => {
    if(document.body.style.backgroundColor != "black") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"; // opcional
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"; // opcional
    }
});

const inputNombre = document.getElementById("inputNombre");
const botonSaludar = document.getElementById("btnSaludar");
botonSaludar.addEventListener("click", () => {
    // 1. Guardo lo que escribió el usuario EN ESTE MOMENTO
    const nombre = inputNombre.value;
    // 2. Lo uso
    alert("Hola " + nombre);
});

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

const inputDano = document.getElementById("inputDano");
const btnAtacar = document.getElementById("btnAtacar");
const spanVida = document.getElementById("vidaTotal"); // El número a cambiar
const mensajeFinal = document.getElementById("mensajeFinal");

let vidaActual = 100;
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
