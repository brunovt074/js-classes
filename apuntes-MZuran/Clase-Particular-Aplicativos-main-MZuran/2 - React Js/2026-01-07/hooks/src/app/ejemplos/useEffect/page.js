"use client"
import React from 'react'
import { useState, useEffect } from 'react'

/* 
    si yo quiero que mi componente USE EFECTOS según un evento personalizado, usamos el hook useEffect 

    useEffect es un hook no devuelve nada

    useEffect es un hook que recibe 2 parámetros:
        1)  El efecto. (Es un callback anónimo)
        2)  Las dependencias. (Es un array que tiene variables de estado o nada) []
    
    El useEffect sirve para "ejecutar el efecto" cuando se cumpla 1 de las siguientes condiciones:
        1)  El componente carga por primera vez
        2)  Si el valor de alguna dependencia cambia

    El useEffect tiene 2 usos principales:
        1) Si nosotros queremos que algo suceda UNA SÓLA VEZ (cuando se carga)
           por primera vez, debemos usar el useEffect con dependencias vacías
           
        2) Si nosotros queremos "vigilar el valor de una variable", generalmente lo hacemos con useEffect
*/

function Page() {

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    useEffect(
        () => {
            console.log("Sólo me ejecuto al principio")
        },          //  El efecto
        []          //  Las dependencias
    )

    /*
        Hacer que el useEffect de abajo me avise por consola cuando el valor de la variable
        Y sea igual a 10
    */

    useEffect(
        () => { 

            if (Y == 10) {
                console.log("Y es igual a 10") 
            }
            
        },
        [Y]   
    )
    
    //console.log("Me voy a ejecutar siempre") //  Esto corre cada vez que se "recarga" (re-renderiza) el componente

    return (
        <div>
            <h1>Ejemplo useEffect</h1>
            <p>
                Valor de X: {X} <br/>
                Valor de Y: {Y}
            </p>
            
            <button onClick={() => { setX(X + 1) }} >X + 1</button>
            <button onClick={() => { setY(Y + 1) }} >Y + 1</button>
            <br/>
            <button onClick={() => { setX(X - 1) }} >X - 1</button>
            <button onClick={() => { setY(Y - 1) }} >Y - 1</button>

        </div>
    )
}

export default Page

/*
    EVENTOS:
    Un evento es "algo que podemos detectar" y asociarle un callback como consecuencia de ser detectado

    EFECTO:
    Es un callback asociado a un evento
*/

/*
    Funciones

    Función declarada con nombre "duplicar":

        function duplicar(x) { return 2*x }

    Función flecha (lambda/anónima)

        (x) => { return 2*x }

        Si nosotros queremos "usar" esta función, le tenemos que "dar un nombre" metiendola dentro de una variable
        const duplicar = (x) => { return 2*x }

        () => {}
*/