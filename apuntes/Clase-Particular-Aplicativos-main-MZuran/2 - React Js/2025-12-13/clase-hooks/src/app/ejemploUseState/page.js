"use client"

import React from 'react'

import { useState } from 'react'

/*
    El estado es la memoria interna del componente
    Si nosotros queremos guardar un dato en el componente y utilizarlo de forma variable, debemos usar el estado

    Si nosotros queremos usar el estado, debemos utilizar el Hook useState
    Si nosotros queremos usar algún hook, debemos emplear el "use client"

    La utilidad de useState es crear una "variable de estado"

    contador

    const [contador, setContador] = useState(0)
    
    const ['nombre variable', 'nombre setter'] = useState('valor inicial')

    contador:
        El nombre de la variable de estado

    setContador:
        El nombre de la función setter asociada a la variable de estado

    ¿Qué es una función setter?
    Las variables de estado NO ADMITEN EL USO DEL OPERADOR ASIGNACIÓN =

    contador = 1                //  NO FUNCIONA

    En lugar del operador asignación, debemos usar la función setter de la variable de estado

    setContador(1)              //  SI FUNCIONA

    contador = contador + 1     //  NO FUNCIONA
    setContador(contador + 1)   //  SI FUNCIONA
*/

function Page() {

    const [contador, setContador] = useState(0)
    let contadorSuelto = 0

    function sumarUno() {
        contadorSuelto = contadorSuelto + 1

        setContador(contador + 1)
    }

    //console.log("Hiciste un pago de 5$")

    return (
        <div>
            <h1>Ejemplo useState</h1>
            <p>
                El valor de la variable de estado es: {contador} <br/>
                El valor de la variable fuera del estado es: {contadorSuelto}
            </p>
            <button onClick={ sumarUno } >+1</button>
        </div>
    )
}

export default Page

/*
    callback    -   Es una función que pasamos por parámetro a otra función

    prop        -   Parámetro recibido por los componentes o etiquetas html

    onClick
*/