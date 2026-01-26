"use client"

import React from 'react'
import Nombre from './Nombre'
import Precio from './Precio'
import Stock from './Stock'

import { useEffect } from 'react'

function DetalleAlimento({ nombre, precio, stock }) {
  return (
    <div>
      <Nombre texto={nombre}/>
      <Precio valor={precio} />
      <Stock stockDisponible={stock} />
    </div>
  )
}

export default DetalleAlimento
