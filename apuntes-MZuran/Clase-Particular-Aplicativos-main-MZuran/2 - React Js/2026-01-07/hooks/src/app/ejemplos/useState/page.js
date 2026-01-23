"use client"
import React from 'react'
import { useState } from 'react'

/*
    Nosotros queremos que react "recuerde" un número que va cambiando
    Si queremos que algo sea "recordado", entonces debe estar dentro del estado (también llamado memoria interna)

    Para usar el estado, necesitamos el useState

    useState es un hook
    La sintaxis del useState es la siguiente (ejemplo para una variable llamada "contador")

    const [contador, setContadorEstado] = useState(0)
    const [<Nombre de la variable de estado>, <Nombre función setter>] = useState(<valor inicial>)

    Una variable de estado es una variable dentro del estado

    Las variables de estado NO admiten el operador de asignación =
    En lugar de asignación, debemos usar la función asociada setter

    contador = 1        //  NO FUNCIONA
    setContador(1)      //  SÍ FUNCIONA

    contador = contador + 1     //  NO FUNCIONA
    setContador(contador + 1)   //  SÍ FUNCIONA
*/

function Page() {

    let contadorF = 0                                           //  Variable "normal"
    const [contadorEstado, setContadorEstado] = useState(0)     //  Variable de estado

    function buttonClickHandler() {
        contadorF = contadorF + 1
        setContadorEstado(contadorEstado + 1)
    }

    return (
        <div>
            <h1>Ejemplo useState</h1>
            <p>
                El valor del contador fuera del estado es {contadorF} <br/>
                El valor del contador dentro del estado es {contadorEstado}
            </p>
            <button onClick={buttonClickHandler} >+1</button>
        </div>
    )
}

export default Page

/*
    function duplicar(x) {return 2*x}

    CALLBACK:
    Es cuando pasamos una función por parámetro a otra función
    La función es pasada por declaración

    console.log(duplicar)   //  Duplicar es un callback

    EJECUCIÓN DE UNA FUNCIÓN:
    Nombre de la variable que conteine la función con paréntesis
    Se usa para "correr" la función
    duplicar(2)

    DECLARACIÓN DE UNA FUNCIÓN:
    Nombre de la variable que contiene la función sin paréntesis
    Se usa para hacer "callbacks"
    duplicar
*/

/*
    EVENTOS:
    Un evento es "algo que podemos detectar" y asociarle un callback como consecuencia de ser detectado

    EFECTO:
    Es un callback asociado a un evento
*/