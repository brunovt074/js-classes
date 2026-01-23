import React from 'react'
import { useEffect } from 'react'

export function ButtonMessage({ propSocket }) {

    function buttonHandler() {
        const mensaje = prompt("Escriba un mensaje")

        propSocket.emit("nuevoMensaje", { text: mensaje })
    }

    useEffect(
        () => {
            propSocket.on("nuevoMensajeCliente", (data) => {
                console.log(data.text)
            })
        },
        []
    )

    return (
        <>
            <button onClick={buttonHandler} >Enviar Mensaje</button>
            <input/>
        </>
    )
}