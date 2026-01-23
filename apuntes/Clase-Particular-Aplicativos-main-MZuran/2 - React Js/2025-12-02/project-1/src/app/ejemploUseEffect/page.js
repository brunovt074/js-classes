"use client"
import React from 'react'

import { useEffect, useState } from 'react'

function Page() {

    const [contador, setContador] = useState(0)

    useEffect(
        () => {},       // Callback (también llamado efecto)
        []              // Array de dependencias
    )

    useEffect(
        () => {
            console.log("Se ejecutó el efecto que no depende de nada")
        },
        []         
    )

    useEffect(
        () => {
            if (contador == 10) {
                alert("El contador es 10")
            }
        },
        [contador]         
    )

    //console.log("Se ejecuto algo por fuera del useEffect")

    function buttonHandler() {
        setContador(contador + 1)
    }

    return (
        <div>
            <h1>Ejemplo useEffect</h1>
            <p>El valor actual del contador es {contador}</p>
            <button onClick={buttonHandler} >+1</button>
        </div>
    )
}

export default Page


/*
    Hook useEffect
    El hook useEffect es una función que, a diferencia del useState, no devuelve nada
    No se debe asignar a ninguna cosa

    useEffect( callback, arrayDeDependencias )
    useEffect( ()=>{}, [] )

    El useEffect va a ejecutar el callback asociado cuando se cumpla 1 de 2 condiciones:

    1)  El componente es renderizado por primera vez
    2)  Una de las variables dentro del array de dependencias cambia su estado

    Si queremos que algo SÓLO suceda UNA SÓLA VEZ, quiere decir que necesitamos un useEffect con
    un array de dependencias vacío

*/
