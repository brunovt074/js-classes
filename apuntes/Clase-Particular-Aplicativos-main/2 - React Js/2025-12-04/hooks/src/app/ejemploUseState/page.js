"use client"

import React from 'react'

import { useState } from 'react'

/*
    Un hook es una función especial que nos permite usar ciertas características nuevas
    Siempre que usemos un hook debemos importarlo y poner "use client" arriba del todo
    El estado de un componente es la memoria interna del propio componente

    Generalmente, algunos hooks requieren de una "inicialización" de una o más variables
    useState devuelve un array que contiene una variable y una función

    const [<variable de estado>, <setter de variable de estado>] = useState(<valor inicial de la var>)

    Variable de estado:
        Es un tipo de variable especial que justamente se almacena en el estado del componente
        Las variables de estado NO ADMITEN EL USO del operador asignación "="

        numero = 5              //  NO FUNCIONA
    
    Setter:
        Es una función asociada a la variable de estado la cual simplemente recibe el nuevo valor a almacenar

        setNumero(5)            //  SI FUNCIONA

        numero = numero + 1     //  NO FUNCIONA
        setNumero(numero + 1)   //  SI FUNCIONA
*/

function Page() {

    const [numero, setNumero] = useState(0)
    let numeroNormal = 0

    function buttonHandlerClickSuma() {
        numeroNormal = numeroNormal + 1
        setNumero(numero + 1)
    }

    function buttonHandlerClickResta() {
        setNumero(numero - 1)
    }

    console.log("Se reinició el componente")

    return (
        <div>
            <h1>Ejemplo useState</h1>
            <p>
                El valor de la variable de estado es: {numero} <br/>
                El valor de la variable normal es: {numeroNormal}
            </p>

            <button onClick={buttonHandlerClickSuma} >+1</button>
            <button onClick={buttonHandlerClickResta} >-1</button>
        </div>
    )
}

export default Page

/*
    Armamos un botón y le asignamos una funcionalidad
    Necesitamos una función que se ejecute cuando apretamos el botón

    El evento "click" se puede detectar mediante el prop onClick 
    El prop onClick se utiliza haciendo onClick={callback}
    (los callbacks nunca van con los paréntesis)
*/

/*
    Tipos de datos:

    Números
    Strings             // Son los tipos de datos que abren y cierran con comillas "" '' ´´

    Objetos             // Son los tipos de datos que abren y cierran con llaves { }
        Alamacenan duplas de clave:valor separados por coma
        const persona = { nombre:"Matias", edad: 22 }
        Para extraer información de un objeto concatenamos punto y una clave
        persona.nombre


    Listas(Arrays)      // Son los tipos de datos que abren y cierran con corchetes [ ]
        Almacenan valores ordenados por lista
        Para extraer información se concatena un corchete y una posición
        abecedario[0] == "a"

    Funciones           // Son los tipos de datos que reciben parámetros y ejecutan código
        Para ejecutarlas se concatenan los paréntesis con parámetros
        Y si se llaman sin paréntesis tenemos acceso al código

        () => {}        //  Una función flecha que también sirve para definir callbacks

    Componentes
*/