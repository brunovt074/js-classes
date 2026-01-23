'use client'

import React from 'react'
import { useSocket } from '@/hooks/useSocket'
import { useEffect, useState } from 'react'

function Pagina() {
    const { socket, isConnected } = useSocket()

    const [arrayMensajes, setArrayMensajes] = useState([])

    useEffect(
        () => {

            if (!socket) { return }

            // A partir de acá metemos nuestras suscripciones con socket.on()

            socket.on("nuevo_mensaje", (mensaje) => {
                console.log("Se recibió un mensaje nuevo!", mensaje)

                setArrayMensajes( prevArray => [...prevArray, mensaje] )
                // Debemos hacer esto si queremos ir expandiendo un array
            })

        },
        [socket]
    )


    function clickHandlerEnviar() {
        const texto = "Hello World"

        socket.emit("enviar_mensaje", { texto: texto })
    }

    function clickHandlerCambiarSala() {
        const id = prompt("Ingrese la id de la sala")

        socket.emit("join_room", { roomId: id })
    }

    return (
        <div>
            <h1>Ejemplo Sockets</h1>

            <button onClick={clickHandlerEnviar}>Enviar</button>
            <button onClick={clickHandlerCambiarSala}>Cambiar Sala</button>

        </div>
    )
}

export default Pagina
