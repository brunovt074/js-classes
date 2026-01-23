"use client"

import React from 'react'
import { useState, useEffect } from 'react'

/*
    El useEffect es un hook
    El useEffect no devuelve absolutamente nada

    El useEffect recibe 2 parámetros:
        1.  Un callback (llamado efecto)
        2.  Un array    (llamado array de dependencias)

    El useEffect va a hacer que el componente ejecute la función callback cuando se cumpla
    1 de estas 2 condiciones:

        a)  El componente es renderizado POR PRIMERA VEZ (Ignora recargas)
        b)  Una variable de estado contenida en el array de dependencias cambia su valor

    Si nosotros queremos que algo sólo suceda una sóla vez DEBEMOS DEJAR EL ARRAY DE DEPENDENCIAS VACÍO
*/

export default function Page() {

    const [numero, setNumero] = useState(0)

    function buttonHandlerClickSuma() {
        setNumero(numero + 1)
    }

    useEffect(
        () => { },   //  El efecto
        []          //  El array de dependencias
    )

    useEffect(
        () => {
            console.log("Me ejecuté (Ejecución controlada)")
        },
        []
    )

    useEffect(
        () => {
            if (numero == 7) {
                alert("Llegaste al reinicio número 7")
            }
        },
        [numero]
    )


    console.log("Se recargó el componente (Ejecución descontrolada)")

    return (
        <div>
            <h1>Ejemplo useEffect</h1>
            <p>
                La ejecución controlada de código <br />
                Este el reinicio número {numero}
            </p>

            <button onClick={buttonHandlerClickSuma} >Cambiar el estado del componente</button>
        </div>
    )
}
