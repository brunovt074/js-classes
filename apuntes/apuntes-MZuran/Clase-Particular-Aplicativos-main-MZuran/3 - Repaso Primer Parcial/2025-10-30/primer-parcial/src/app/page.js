import React from 'react'
import Tarjeta from '@/components/Tarjeta'

/*
  Usando array.map() vamos a mapear la listaNombres a componentes Tarjeta
*/

function Page() {

  const listaNombres = ["Matías", "Máximo", "Alex", "Simon", "Luca"]

  const listaMapeada = listaNombres.map(

    (elemento, index) => {
      return <Tarjeta nombre={elemento} posicion={index} key={"elemento-"+index}/>
    }

  )

  return (
    <div>
      {listaMapeada}
    </div>
  )
}

export default Page


  /*
  Una lista puede contener:
  -Strings
  -Números
  -True/False
  -Funciones
  -Array
  -Objeto
  -Etiquetas (Las normales o los componentes que armemos nosotros)
  */