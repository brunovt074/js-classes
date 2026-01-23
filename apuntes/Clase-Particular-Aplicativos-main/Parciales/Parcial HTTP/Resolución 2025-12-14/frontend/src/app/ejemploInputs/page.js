"use client"

import React from 'react'

import { useState } from 'react'

function Page() {

  const [texto, setTexto] = useState("")
  const [numero, setNumero] = useState(0)
  const [casilla, setCasilla] = useState(false)
  const [seleccion, setSeleccion] = useState()

  function changeHandlerTexto(e) {
    // e.target.value
    setTexto(e.target.value)
  }

  return (
    <div>
      <h1>Home</h1>

      {/* 
          A la etiqueta input le quiero pasar un prop que se llama "type"
      */}

      <p>
        El valor de la variable de estado texto es: {texto} <br/>
        El valor de la variable de estado numero es: {numero} <br/>
        El valor de la variable de estado casilla es: {casilla} <br/>
        El valor de la variable de estado seleccion es: {seleccion} <br/>
      </p>

      <input
        type={"text"}
        onChange={changeHandlerTexto}
        defaultValue={texto}
        placeholder={"Ingrese texto..."}
      >
      </input>

      <input
        type={"number"}
        onChange={ (e) => { setNumero(e.target.value) } }
        defaultValue={numero}
        max={10}
        min={0}
      >
      </input>

      <input
        type={"checkbox"}
        onChange={ (e) => { setCasilla(e.target.checked) } }
      >
      </input>

      <select
        onChange={ (e) => { setSeleccion(e.target.value) } }
      >
        <option>Banana</option>
        <option>Pera</option>
        <option>Hamburguesa</option>
      </select>

    </div>
  )
}

export default Page

/*
  1.  El estado - La memoria interna del componente
                  Lo podemos utilizar con useState creando una variable de estado

  2.  Evento    - Es una acción que podemos detectar y asociar un efecto en consecuencia
                  Asociamos una función para cada vez que se detecta un evento

  3.  Prop      - Es un parámetro que recibe un componente o etiqueta html
*/