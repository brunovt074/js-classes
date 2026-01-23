"use client"

import React from 'react'

import { useState } from 'react'
import { useEffect } from 'react'

/*
    useEffect es un hook (función) que permite ejecutar efectos cuando nosotros querramos

    useEffect no devuelve nada

    useEffect recibe 2 parámetros:

        1.  Callback    -   Efecto
        2.  Array       -   Array de dependencias

    El array de dependencias suele estar vacío o alternativamente puede tener variables de estado

    El useEffect ejecuta el efecto cuando se cumpla cualquiera de estas 2 condiciones:

    1)  El componente carga por primera vez (Ignorando recargas)
    2)  Una variable dentro del array de dependencias cambia su valor

    SI NOSOTROS QUEREMOS QUE "ALGO" SÓLO SUCEDA 1 VEZ SÓLA, DEBEMOS METERLO DENTRO DEL EFECTO DE UN USEEFFECT
    QUE TENGA UN ARRAY DE DEPENDENCIAS VACÍO

    Si nosotros queremos "vigilar" el valor de una variable, utilizamos también el useEffect
*/

function Page() {

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    useEffect(
        () => {

            console.log("Cambio Y")

        },       //  El efecto
        [Y]      //  El array de dependencias
    )

    useEffect(
        () => {

            if (X == 5) {
                alert("X es igual a 5")
            }

        },       //  El efecto
        [X]      //  El array de dependencias
    )

    //console.log("Código descontrolado")

    return (
        <div>
            <h1>Ejemplo useEffect</h1>
            <p>
                El valor de x es: {X} <br />
                El valor de y es: {Y} <br />
            </p>
            <button onClick={() => { setX(X + 1) }} >X + 1</button>
            <button onClick={() => { setX(X - 1) }} >X - 1</button>

            <br />
            <button onClick={() => { setY(Y + 1) }} >Y + 1</button>
            <button onClick={() => { setY(Y - 1) }} >Y - 1</button>
        </div>
    )
}

export default Page