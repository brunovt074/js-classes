"use client"

import React from 'react'
import { useState } from 'react'

/*
    useState es un hook cuya función principal es crear una variable de estado
    La sintaxis de uso es la siguiente:

    const [contador, setContador] = useState(0)

    const [<nombreVar>, <nombreSetter>] = useState(<valorInicial>)

    Variable de estado:
        Es la variable que está guardada dentro del estado.

    Función setter:
        Las variables de estado NO pueden utilizar el operador asignación.
        En su lugar usamos la función setter que recibe el nuevo valor

        contador = 1                //  NO FUNCIONA
        setContador(1)              //  SI FUNCIONA

        contador = contador + 1     //  NO FUNCIONA
        setContador(contador + 1)   //  SI FUNCIONA
*/

function Page() {
    
    let numeroSuelto = 0
    const [numeroEstado, setNumeroEstado] = useState(0)

    function clickHandlerButtonSuma() {
        numeroSuelto = numeroSuelto + 1
        setNumeroEstado(numeroEstado + 1)
    }

    function clickHandlerButtonResta() {
        numeroSuelto = numeroSuelto - 1
        setNumeroEstado(numeroEstado - 1)
    }

    //console.log("Se ha realizado una compra")

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <p>
                El <b>estado</b> de un componente es la "memoria interna" del componente. <br />
                Todo valor que no esté guardado dentro de la memoria interna del componente se
                pierde con las muchas recargas.
                <br /><br />
                <b>Cada vez que el estado cambia</b>, el componente se <b>recarga</b>
                <br /><br />
                Para solucionar este problema y poder guardar información, usamos
                el <b>hook useState</b>
            </p>

            <hr/>
            <p>
                El valor de la variable suelta es: {numeroSuelto} <br/>
                El valor de la variable de estado es: {numeroEstado}
            </p>

            {/* prop onClick={callback} */}
            <button onClick={clickHandlerButtonSuma} >+1</button>
            <button onClick={clickHandlerButtonResta} >-1</button>
        </div>
    )
}

export default Page
