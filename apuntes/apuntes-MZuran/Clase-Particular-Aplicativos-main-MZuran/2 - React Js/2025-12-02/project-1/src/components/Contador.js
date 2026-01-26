"use client"

import React from 'react'

// Queremos que contador guarde un valor en una variable de estado
import { useState } from 'react'

/*
    Las variables de estado NO ADMITEN OPERADOR DE ASIGNACIÓN

    const varNormal = 1
    const [varEstado, setVarEstado] = useState(1)

    varEstado = "Hola"      //  NO FUNCIONA

    ¿Qué debemos usar en lugar del operador asignación?
    Utilizamos la función asociadada a la variable de estado llama "setter"

    setVarEstado("Hola")    //  HACER ESTO EN SU LUGAR
*/

/*
    Props:

    Todas las etiquetas de HTML comunes pueden recibir una cierta cantidad de props previamente definidos
    Uno de los props más útiles para usar de esta forma se llama "onClick"
    Generalmente usamos el prop "onClick" en botones de la siguiente forma

    <button onClick={callback} >Hola</button>

    El callback enviado de esta manera se va a ejecutar cada vez que el usuario haga click al botón
*/

function Contador() {

    // Declaración de una variable de estado
    // const [<nombreVariable>, <setter>] = useState(<valorInicial>)

    const [numero, setNumero] = useState(0)
    let numeroNormal = 0

    function buttonHandlerSuma() {
        console.log("Se ejecutó el callback")

        // Quiero sumarle 1 a la variable de estado y la variable normal
        numeroNormal = numeroNormal + 1
        setNumero(numero + 1)
    }

    function buttonHandlerResta() {
        setNumero(numero - 1)
    }

  return (
    <>
      <p>El valor de la variable de estado numero es {numero}</p>
      <p>El valor de la variable normal del numero es {numeroNormal}</p>
      <button onClick={buttonHandlerSuma} >+1</button>
      <button onClick={buttonHandlerResta}>-1</button>
    </>
  )
}

export default Contador


/*

    =       -   Operador Asignación
    ==      -   Operador Igualdad Débil
    ===     -   Operador Igualdad Estricta

    let x = 0
    x = "Hola"
*/