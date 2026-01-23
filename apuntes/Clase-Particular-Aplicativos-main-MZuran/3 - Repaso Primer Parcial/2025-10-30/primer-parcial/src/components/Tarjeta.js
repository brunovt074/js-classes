import React from 'react'

// Nuestro componente tarjeta debe recibir un prop llamado "nombre"

function Tarjeta({nombre}) {
  return (
    <p>El nombre del pokemon es {nombre}</p>
  )
}

export default Tarjeta
