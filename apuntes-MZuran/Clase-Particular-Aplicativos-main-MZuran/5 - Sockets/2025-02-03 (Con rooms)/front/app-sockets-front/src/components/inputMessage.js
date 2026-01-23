import React, { useState, useEffect } from "react";

export default function TextInputMensaje({propSocket}) {
    // Variable de estado para almacenar el valor del input
    const [mensajeEscritoEnInput, setMensajeEscritoEnInput] = useState("");
    const [nombreDeUsuario, setNombreDeUsuario] = useState("");

    useEffect(
        () => {
            const username = prompt("Ingrese su nombre de usuario")
            setNombreDeUsuario(username)
        },
        []
    )

    // Función que se ejecuta cuando cambia el valor del input
    const handleInputChange = (event) => {
        setMensajeEscritoEnInput(event.target.value); // Actualiza el valor del estado
    };

    function buttonHandler() {
        /* Acá iría un socket.emit o un fetch de tipo POST, GET, etc */
        /* Si se usa un socket acá adentro entonces ese se debería recibir por prop */
        propSocket.emit("nuevoMensaje", { user: nombreDeUsuario, text: mensajeEscritoEnInput })
    }

    return (
        <div>
            <input
                type="text"
                value={mensajeEscritoEnInput}
                onChange={handleInputChange} // Detecta cambios en el input
                placeholder="Escriba Su Mensaje"
            />  {/* este es un input */}

            <button onClick={buttonHandler}> Enviar </button>
        </div>
    );
}