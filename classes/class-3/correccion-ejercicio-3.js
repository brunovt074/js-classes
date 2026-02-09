/* --- SOLUCIÓN INTEGRADORA --- */

// Selectores
const inputDano = document.getElementById("inputDano");
const btnAtacar = document.getElementById("btnAtacar");
const spanVida = document.getElementById("vidaTotal"); // El número a cambiar
const mensajeFinal = document.getElementById("mensajeFinal");

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
