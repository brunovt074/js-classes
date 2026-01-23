'use client'

import React from 'react'

import { useState, useEffect } from 'react'

function Pagina() {

    const [varEstado, setVarEstado] = useState(0)

    const clickHandler = () => {
        setVarEstado(varEstado + 1)
    }

    useEffect(
        () => {
            console.log("Me suscribí al periódico")
        },
        []
    )

    return (
        <div>
            <h1>Ejemplo</h1>
            <p>El valor de la variable de estado es {varEstado}</p>
            <button onClick={clickHandler} >+1</button>
        </div>
    )
}

export default Pagina

/*
    Cuando cambia el estado de un componente, el componente se recarga
    El estado se puede pensar como todas las variables de estado
*/