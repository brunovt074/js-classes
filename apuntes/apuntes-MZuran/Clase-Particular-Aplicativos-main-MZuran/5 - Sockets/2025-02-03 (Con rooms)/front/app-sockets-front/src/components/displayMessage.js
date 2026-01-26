import React from 'react'
import { useEffect, useState } from 'react'

export function DisplayMessage({ propSocket }) {

    const [arrayMensajes, setArrayMensajes] = useState([])

    useEffect(
        () => {
            propSocket.on("nuevoMensajeServidor", (data) => {
                setArrayMensajes(data)
            })
        },
        []
    )

    return (
        <>
            {
                arrayMensajes.map(
                    (elemento, index) => 
                    <div key={index}> <p><b>{elemento.user}: </b>{elemento.text}</p> </div>
                )
            }
        </>
    )
}
