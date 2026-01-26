"use client"
import { Button } from "./Button"
import { Input } from "./Input"

import { useState } from "react"

export function Editar() {

    const [nombre, setNombre] = useState("")
    const [stock, setStock] = useState("")

    function clickHandlerButtonBody() {
        // Se tiene que hacer una petición de tipo PUT
        fetch('http://localhost:4000/modificarProducto',  //Url del backend
        {
            method: 'PUT',   // El tipo de request   
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre: nombre, stock: stock }) // Body (Borrar en caso de hacer GET)
        })

        .then(response => response.json())

        .then(data => {
            // En este punto la respuesta del servidor está en la variable recibida data
            // Acá escribimos lo que sea que querramos hacer con la respuesta
        })
    }

    function clickHandlerButtonQuery() {
        // Se tiene que hacer una petición de tipo PUT
        fetch('http://localhost:4000/modificarProducto?nombre=' + nombre + '&stock=' + stock,  //Url del backend
        {
            method: 'PUT',   // El tipo de request   
            headers: { 'Content-Type': 'application/json' }
        })
    }

    function changeHandlerNombre(event) {
        // Esta función se ejecuta cada vez que cambia el texto dentro del input
        // Tenemos que actualizar la variable de estado nombre

        // El texto dentro del input va a estar en event.target.value
        // console.log(event.target.value)
        setNombre(event.target.value)
    }

    function changeHandlerStock(event) {
        setStock(event.target.value)
    }

    return (
        <>
            <Button onClick={clickHandlerButtonBody} text={"Editar"}></Button>
            <Input onChange={changeHandlerNombre} placeholder={"Nombre"}></Input>
            <Input onChange={changeHandlerStock} placeholder={"Stock"}></Input>
        </>
    )
}