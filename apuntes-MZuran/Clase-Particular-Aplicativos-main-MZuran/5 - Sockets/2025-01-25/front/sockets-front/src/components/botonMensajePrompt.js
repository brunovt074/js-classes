import React from 'react'
import { useEffect } from 'react'

export function BotonMensaje({socketProp}) {

    function buttonHandler() {
        const mensaje = prompt("Escriba el mensaje a enviar")

        socketProp.emit("newMessage", {text: mensaje})
    }

    useEffect(
        () => {
            socketProp.on("newMessageServer", (data) => {
                console.log("Nuevo mensaje!", data.text)
            })
        },
        []
    )

    return (
        <button onClick={buttonHandler} >mensaje</button>
    )
}
