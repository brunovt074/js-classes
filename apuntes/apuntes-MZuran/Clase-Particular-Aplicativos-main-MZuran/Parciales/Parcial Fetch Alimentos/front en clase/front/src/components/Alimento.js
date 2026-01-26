import React from 'react'
import Nombre from './Nombre'

function Alimento({ onClickBoton, nombre }) {
  return (
    <div>
      <hr/>
      <Nombre texto={nombre} />
      <button onClick={onClickBoton} >Ir a detalle</button>
    </div>
  )
}

export default Alimento
