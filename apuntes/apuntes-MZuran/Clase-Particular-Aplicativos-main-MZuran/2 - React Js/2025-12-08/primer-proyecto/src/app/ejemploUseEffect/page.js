"use client"

import React from 'react'

import { useEffect, useState } from 'react'

/*
    useEffect es un hook que no devuelve nada.
    useEffect es un hook que recibe 2 parámetros:

        1.  Callback    -   El efecto
        2.  Array       -   El array de dependencias

    Generalmente el efecto está dado en forma de función flecha.

    El useEffect va a ejecutar el callback cuando se cumpla cualquier condición de las
    siguientes:

        1.  El componente carga por PRIMERA VEZ (Ignorando recargas)
        2.  Que una variable dentro del array de dependencias cambie su valor

    Si queremos que algo SÓLO SUCEDA UNA VEZ, debemos hacer un useEffect que no
    dependa de nada.
*/

function Page() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(
        () => {
            console.log("Se ejecutó el efecto")
        },   //  El efecto
        [y]  //  El array de dependencias
    )

    useEffect(
        () => {
            if(x==5) {
                alert("El valor X llegó a 5")
            }
        },
        [x]
    )

    //console.log("Línea descontrolada")

    function clickHandlerX() {
        setX(x + 1)
    }

    return (
        <div>
            <h1>Ejemplo useEffect</h1>
            <p>Variable de estado x: {x}</p>
            <p>Variable de estado y: {y}</p>
            
            <button onClick={ clickHandlerX } >Cambiar X</button>
            <button onClick={ () => {setY(y + 1)} } >Cambiar Y</button>
        </div>
    )
}

export default Page
