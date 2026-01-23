import React, { useState } from "react";

export default function TextInputComponent() {
    // Variable de estado para almacenar el valor del input
    const [mensajeEscritoEnInput, setmensajeEscritoEnInput] = useState("");

    // Función que se ejecuta cuando cambia el valor del input
    const handleInputChange = (event) => {
        setmensajeEscritoEnInput(event.target.value); // Actualiza el valor del estado
    };

    function buttonHandler() {
        /* Acá iría un socket.emit o un fetch de tipo POST, GET, etc */
        console.log(mensajeEscritoEnInput)
    }

    return (
        <div>
            <input
                type="text"
                value={mensajeEscritoEnInput}
                onChange={handleInputChange} // Detecta cambios en el input
                placeholder="Escribe algo aquí..."
            />  {/* este es un input */}

            <button onClick={buttonHandler}> Enviar </button>
        </div>
    );
}
