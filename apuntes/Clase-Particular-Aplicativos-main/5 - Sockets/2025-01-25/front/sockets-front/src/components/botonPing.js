import React from 'react'

export function BotonPing({socketProp}) {

    function buttonHandler() {
        socketProp.emit("Ping")
    }

    return (
        <button onClick={buttonHandler} >Ping</button>
    )
}
