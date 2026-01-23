"use client"

import React from 'react'

import { useSocket } from '@/hooks/useSocket'
import { useEffect } from 'react'

/*
    useSocket es un hook

    useSocket nos devuelve un objeto que contiene lo siguiente:
    { socket, isConnected }

    useSocket no recibe parámetros
*/

function Pagina() {

    const { socket, isConnected } = useSocket()

    useEffect(
        () => {

            if (!socket) { return }

            // Acá ya podemos poner las suscripciones
            socket.on("ping", () => {
                console.log("Me hicieron un ping")
            })

        },
        [socket]
    )

    function buttonHandlerPing() {
        const input = prompt("Ingrese un mensaje")
        socket.emit("PingServer", { mensaje: input })
    }

    return (
        <div>
            <h1>Ejemplo useSocket</h1>
            <button onClick={buttonHandlerPing} >Pingear al servidor</button>
        </div>
    )
}

export default Pagina
