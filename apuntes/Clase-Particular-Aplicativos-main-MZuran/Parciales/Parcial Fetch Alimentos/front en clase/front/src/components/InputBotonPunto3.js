"use client"
import { useState } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'

function InputBotonPunto3() {

    const [textoInput, setTextoInput] = useState("")

    const router = useRouter()

    // Opcion 1 para callback
    function changeHandlerInput(e) {
        const texto = e.target.value
        setTextoInput(texto)
    }

    // Opcion 2 para callback
    (e) => {setTextoInput(e.target.value)}

  return (
    <div>

      <input
        type='text'
        onChange={(e) => {setTextoInput(e.target.value)}}
      ></input>

      <button
        onClick={() => { router.push(`/detalleAlimento?alimento=${textoInput}`) }}
      >Ir al alimento {textoInput}</button>

    </div>
  )
}

export default InputBotonPunto3