"use client"

import React from 'react'
import { useState } from 'react'

function BotonSumar() {

    let numero = 0
    const [numeroEstado, setNumeroEstado] = useState(0)     //  Creamos la variable de estado numeroEstado y su setter

    const buttonHandlerSuma = () => {
        numero = numero + 1
        setNumeroEstado(numeroEstado + 1)
    }

    const buttonHandlerResta = () => {
        numero = numero - 1
        setNumeroEstado(numeroEstado - 1)
    }

    // Si nosotros le queremos asociar una función (callback) a una etiqueta, 
    // Se la debemos enviar por prop
    // claveProp={valorProp}
    // El prop que asocia un callback con un click se llama onClick

    return (
        <>
            <p>El valor actual de la variable común es {numero}</p>
            <p>El valor actual de la variable de estado es {numeroEstado}</p>
            <button onClick={buttonHandlerSuma} >Sumar 1</button>
            <button onClick={buttonHandlerResta} >Restar 1</button>
        </>
    )
}

export default BotonSumar

// Variables de estado
/*
    Son un tipo de variable especial exclusivo para componentes de react que
    "sobreviven" una recarga del componente

    Se crean con el hook useState
    El hook useState es una función especial de react para crear variables de estado
    Está incluída en el paquete de react por lo que se debe importar

    ¿Cómo se usa el useState?
    Dentro del componente escribimos:

    const [<variableDeEstado>, <setter>] = useState(<valorInicial>)

    <variableDeEstado>
    Acá escribimos el nombre de nuestra nueva variable de estado
    Las variables de estado NO ADMITEN ASIGNACIÓN
    Se debe usar SIEMPRE el setter para darle un nuevo valor

    variableEstado = 1      //  NO FUNCIONA
    setVariableEstado(1)    //  FUNCIONA

    variableEstado = 5 * variableEstado         //  NO FUNCIONA
    setVariableEstado(5 * variableEstado)       //  FUNCIONA

    <setter>
    Es una FUNCIÓN la cual usamos cada vez que queramos darle un nuevo valor a 
    la variable de estado

    Por convención, el nombre del setter suele ser set<variableDeEstado> en camelCase

    edad
    setEdad

    <valorInicial>
    Es el valor inicial de la variable de estado
*/