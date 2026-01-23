"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'

function Page() {

    const [textoInput, setTextoInput] = useState("")
    const [numeroInput, setNumeroInput] = useState(0)

    const router = useRouter()

  return (
    <div>
      <h1>Inicio</h1>

      <input
        type='text'
        onChange={ (e) => { setTextoInput(e.target.value) } }
      ></input>

      <input
        type='number'
        onChange={ (e) => {setNumeroInput(e.target.value)} }
      ></input>

      <button
        onClick={() => { router.push(`/tareas?username=${textoInput}&alumnoId=${numeroInput}`) }}
      >Ir a tareas</button>

      { textoInput.length < 3 && <p>Error, mínimo 3 caracteres para el nombre</p> } 
      
    </div>
  )
}

export default Page