import React, { useEffect, useState } from "react";

export function MessageInput({ socketProp }) {
    // Variable de estado para almacenar el valor del input
    // const [<variableEstado>, <funcionSetter>] = useState(<valorInicial>)

    // varEstado = algo     ESTÁ MAL
    // setVarEstado(algo)   ESTÁ BIEN
    const [mensajeEscritoEnInput, setmensajeEscritoEnInput] = useState("");

    // definir variable de estado llamada userName
    const [userName, setUserName] = useState("Usuario no logeado")

    // se ejecuta al principio
    useEffect(
        () => {
            setUserName(prompt("Ingrese su nombre")) // guardarlo en una variable de estado
        },
        []
    )

    // Función que se ejecuta cuando cambia el valor del input (no darle bola)
    const handleInputChange = (event) => {
        setmensajeEscritoEnInput(event.target.value); // Actualiza el valor del estado
    };

    // Función asociada al botón, modificar
    function buttonHandler() {
        /* Acá iría un socket.emit o un fetch de tipo POST, GET, etc */
        /* Si se usa un socket acá adentro entonces ese se debería recibir por prop */
        console.log(mensajeEscritoEnInput)

        socketProp.emit("newMessage", {
            text: mensajeEscritoEnInput,
            userName: userName
        })
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
