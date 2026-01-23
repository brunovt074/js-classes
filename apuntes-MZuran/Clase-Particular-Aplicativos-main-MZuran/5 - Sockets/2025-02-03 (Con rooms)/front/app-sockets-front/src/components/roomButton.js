import React from 'react'

export default function RoomButton({ propSocket }) {

  function buttonHandler() {
    const roomSeleccionada = prompt("Ingrese nueva sala")
    propSocket.emit("joinRoom", {room: roomSeleccionada})
  }

  return (
    <button onClick={buttonHandler}>
      CambiarSala
    </button>
  )
}
