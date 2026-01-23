/*
    Hook useState

    ¿Qué es un hook?
    Un hook es una funcion que modifica el comportamiento de un componente de react

    El hook useState le sirve al usuario para crear un nuevo tipo de variable llamada
    "Variable de Estado". La característica principal de una variable de estado es que puede
    "sobrevivir" a los reinicios constantes de react.

    La función (o hook) useState NO VIENE con javascript, por lo que, al igual que los componentes,
    debemos importarla.

    La sintaxis del uso de useState es la siguiente;

        const [<nombre de la variable>, <nombre de la funcion setter>] = useState(<valor inicial>)
        const [contador, setContador] = useState(0)

    En este caso "contador" es la variable de estado y "setContador" su setter.

    Las variables de estado NO pueden usar asginación 
        contador = 1    (MAL)
        setContador(1)  (BIEN)

        contador = contador + 1     (MAL)
        setContador(contador + 1)   (BIEN)

    El rol de la funcion setter es darte una forma de cambiar lo que tiene adentro la variable de estado
*/

import { useState } from "react"

export default function EjercicioUseState() {

    let contadorNormal = 0
    const [contador, setContador] = useState(0)

    function sumarUno() {
        contadorNormal = contadorNormal + 1
        setContador(contador + 1)
    }

    /*
        Queremos hacer que la funcion restarUno reste uno SÓLO si el contador es mayor o igual a 1
    */

    function restarUno() {
        if ( contador >= 1 ) {
            setContador(contador - 1)
        }
    }

    return (
    <>
    <h1>Use State</h1>
    <p>El problema que tiene react al declarar y utilizar variables es que está en constante reinicio. <br/>
        Las "Variables Normales" no pueden sobrevivir a este refresco por lo que nos vemos obligados a usar
        Variables Especiales llamadas "Variables De Estado"
    </p>

    <p>El valor del contador normal es {contadorNormal}</p>
    <p>El valor del contador de estado es {contador}</p>

    <button onClick={sumarUno} >+1</button>
    <button onClick={restarUno} >-1</button>
    </>
    )
}