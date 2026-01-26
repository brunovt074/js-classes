"use client"

import { Button } from "./Button"
import { Input } from "./Input"

import { useState } from "react"

export function Editar({ nombreProducto }) {

    // Nos sirve para modificar atributos de un producto
    // Uno de los inputs es el nuevo stock del producto
    // El botón es para que cuando lo presionemos se modifique el producto

    const [nuevoStock, setNuevoStock] = useState("")

    function changeHandlerStock(e) {
        setNuevoStock(e.target.value)
    }

    function clickHandlerButton() {

        const body = { nombre: nombreProducto, stock: nuevoStock }; // Este es el objeto que enviamos dentro del body.

        fetch('http://localhost:4000/modificarProducto', {
            method: 'PUT', //  Cambiar por PUT, o DELETE si es necesario
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

            .then(response => response.json())
            .then(data => {

                console.log(data)
                // Acá adentro hacemos lo que querramos con lo que nos llega del POST
                // Se puede por ejemplo usar el setter de una variable de estado

            });

    }

    return (
        <div>
            <p>
                El stock ingresado es: {nuevoStock}
            </p>
            <Input
                placeholder={"Nuevo stock del producto"}
                onChange={changeHandlerStock}
            ></Input>
            <Button
                text={"Modificar Producto"}
                onClick={clickHandlerButton}
            ></Button>
        </div>
    )
}