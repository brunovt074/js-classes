"use client"

import React from 'react'

import { useState, useEffect } from 'react'

function PositivoONegativo() {
    const [Numero, setNumero] = useState(0) //  Creamos la variable de estado Numero y su setter

    const buttonHandlerSuma = () => {
        setNumero(Numero + 1)
    }

    const buttonHandlerResta = () => {
        setNumero(Numero - 1)
    }

    useEffect(
        () => { 
            if(Numero == 5) {
                alert("Numero es 5")
            }
        },
        [Numero]
    )

    useEffect(
        () => {},   // Callback
        []          // Array de dependencias
    )

    return (
        <>
            <p>El numero es {Numero}</p>
            <button onClick={buttonHandlerSuma} >+1</button>
            <button onClick={buttonHandlerResta} >-1</button>
        </>
    )
}

export default PositivoONegativo

// Hook useEffect
/*
    es una función incluída en el paquete de react que ejecuta un callback cuando
    el valor de ciertas variables cambia

    Un callback es la DEFINICIÓN de una función que se envía por parámetro a otra función

    ¿Cómo se usa el useEffect?
    Es una función que no devuelve nada
    Es una función que espera recibir 2 parámetros:
        1) Un callback (generalmente una función flecha)
        2) Un array (Llamado el array de dependencias)

    ¿Cómo funciona el useEffect?
    La función callback se va a ejecutar cuando se cumpla una de estas condiciones:
        1) El componente es cargado por primera vez
        2) Un valor dentro del array de dependencias cambia
*/