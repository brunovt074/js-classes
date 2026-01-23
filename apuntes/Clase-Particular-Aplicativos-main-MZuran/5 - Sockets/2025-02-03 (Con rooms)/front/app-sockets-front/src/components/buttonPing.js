import React, { use } from 'react'
import { useEffect } from 'react'

export function ButtonPing({ propSocket }) {

    function clickHandler() {
        propSocket.emit("ping")
    }

    // Generalmente nuestros sockets.on del lado del front van dentro de un useEffect sin dependencias

    useEffect(
        () => {
            propSocket.on("pong", (data) => {
                console.log("Me pongearon")
            })
        },
        []
    )

    return (
        <button onClick={clickHandler}> Ping </button>
    )
}
