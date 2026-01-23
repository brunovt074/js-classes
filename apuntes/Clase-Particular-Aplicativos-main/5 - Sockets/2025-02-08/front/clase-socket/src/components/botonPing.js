import React from 'react'

/*
    Recordar que todos los .on() van dentro de useEffect y que los .emit() pueden ir generalmente
    en cualquier lado (hay que tener cuidado con los loops infinitos)

    Se debe usar el mismo socket en todos los componentes
    El botón o cualquier componente debe de RECIBIR el socket por prop

    Como socketProp adentro tiene el socket
    podemos hacer
        socketProp.on()
        socketProp.emit()

    Se debe crear un useEffect con dependencias vacías
*/

import { useEffect } from 'react'

export function BotonPing({ socketProp }) {

    useEffect(
        () => {
            // Los .on() iran acá adentro
            socketProp.on("pong", (data) => {
                console.log(data)
            })
        },
        []
    )

    function pingButtonHandler() {
        // Ponemos el .emit()
        socketProp.emit("ping", { mensaje: prompt("Escriba el mensaje a enviar") })
    }

    return (
        <>
            <button onClick={pingButtonHandler} >
                Ping
            </button>
        </>
    )
}
