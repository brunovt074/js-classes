"use client"

import React from 'react'

import { useSocket } from '@/hooks/useSocket'

import { useEffect } from 'react'

/* 
    Los hooks son un tipo de funciones especiales que nos brindan la posibilidad de usar ciertas
    características nuevas.

    Recordar que siempre que usemos un hook, debemos utilizar el string "use client"
*/

function Page() {

  const { socket, isConnected } = useSocket()

  useEffect(
    () => {

      if (!socket) {
        return
      }

      // A partir de acá podemos suscribirnos a eventos con socket.on
      socket.on("ping", () => {
        console.log("Me hicieron un ping")
      })

    },
    [socket]
  )

  function buttonHandlerPing() {
    const mensaje = prompt("Ingrese un mensaje para el backend")
    socket.emit("PingServer", { mensaje: mensaje }) //  Le enviamos esto al backend
  }

  return (
    <div>
      <button onClick={buttonHandlerPing} >Mandar ping al servidor</button>
    </div>
  )
}

export default Page
