"use client"

import React from 'react'

import { useSocket } from '@/hooks/useSocket'
import { useEffect } from 'react'

// Queremos usar el socket

/*
    El callback del useEffect se ejecuta cuando:
    1)  El componente carga por primera vez (ignorando re-renderizados)
    2)  Una variable dentro del array de dependencias cambia su valor
*/

function Page() {

    const { socket, isConnected } = useSocket()

    useEffect(
        () => {

            if (!socket) { return }

            console.log("Se realizó la suscripción")

            socket.on("mensaje", (data) => {
                console.log("Llegó un mensaje", data.mensaje)
            })

        },
        [socket]
    )

    // Vamos a emitir un mensaje cuando presionemos un botón

    function buttonHandlerEmit() {
        const mensaje = prompt("Ingresa tu mensaje")
        socket.emit("ping", { texto: mensaje })
    }

    return (
        <div>
            <button onClick={buttonHandlerEmit} >Pingear al backend</button>
        </div>
    )
}

export default Page
