"use client"

import React from 'react'

import { useEffect, useState } from 'react'

function Page() {

    const [numero, setNumero] = useState(1)

    const buttonHandler = () => {
        setNumero(numero+1)
    }

    console.log("Enviando mensaje a pepe... (Forma despotegida)")

    useEffect(
        () => {
            console.log("Enviando mensaje a pepe... (Forma protegida)")
        },
        []
    )

  return (
    <div>
      <p>El numero es {numero}</p>
      <button onClick={buttonHandler}>+1</button>
    </div>
  )
}

export default Page
