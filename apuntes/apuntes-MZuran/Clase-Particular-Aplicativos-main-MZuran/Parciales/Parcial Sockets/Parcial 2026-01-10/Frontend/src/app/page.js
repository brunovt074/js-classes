"use client"

import React from 'react'
import { useEffect } from 'react'

// usar useSocket
import { useSocket } from '@/hooks/useSocket'

function Page() {

  const { socket, isConnected } = useSocket()

  useEffect(
    () => {

      if (!socket) { return }

      // Meter suscrupciones acá abajo
      socket.on("serverPing", () => {
        console.log("El backend me hizo un ping con el evento serverPing")
      })

      socket.on("mensajeBack", (data) => {
        console.log("El backend me mandó el mensaje", data.text)
      })

    },
    [socket]
  )

  return (
    <div>
      <h1>Home</h1>

      <button
        onClick={() => { socket.emit("ping") }}
      >Hacer Ping</button>

      
      <button
        onClick={() => { socket.emit("mensajeFront", { text: prompt("Ingrese mensaje") } ) }}
      >Enviar Mensaje</button>

    </div>
  )
}

export default Page
