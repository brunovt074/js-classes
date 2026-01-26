import React, { useState } from "react";

export default function TextInputComponent({ socket }) {
    // Variable de estado para almacenar el valor del input
    const [mensajeEscritoEnInput, setmensajeEscritoEnInput] = useState("");

    // Función que se ejecuta cuando cambia el valor del input
    const handleInputChange = (event) => {
        setmensajeEscritoEnInput(event.target.value); // Actualiza el valor del estado
    };

    function buttonHandler() {
        /* Puede ser que acá tengas que usar un fetch en lugar de un socket */
        socket.emit("newMessage", { content: mensajeEscritoEnInput })

        const reqBodySimulado = { nombre: mensajeEscritoEnInput, precio: mensajeEscritoEnInput }
        /* Agarras este req body y lo usas en el POST a la direccion correspondiente */

        const productos = []
        /* 
        Para fijarte si el producto ya existe en el array podes usar productos.filter
        Vas a filtrar tal que elemento.nombre == mensajeEscritoEnInput para el nombre y lo mismo para el precio 
        si el arrayFiltrado.length > 0, quiere decir que ese producto ya existe entonces no se dispara la funcion
        */
    }

    return (
        <div>
            <input
                type="text"
                value={mensajeEscritoEnInput}
                onChange={handleInputChange} // Detecta cambios en el input
                placeholder="Escribe algo aquí..."
            />  {/* este es un input */}

            {/* acá vas a tener que crear otro input con sus handleInput variable de estado correspondiente */}

            <button onClick={buttonHandler}>Enviar</button> {/* este es el botón */}
        </div>
    );
}
