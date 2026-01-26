"use client"

import React from 'react'
import { useState } from 'react'

function Page() {

    const [contador, setContador] = useState(0)

    return (
        <div>
            <h1>Ejemplo conditional rendering</h1>
            <p>El valor del contador es {contador}</p>
            <p>
                El conditional rendering nos sirve para renderizar (o dibujar) cosas en pantalla dependiendo si se cumple o no una condición <br /><br />
                Con conditional rendering vamos a mostrar lo siguiente: <br/>
                - Si el contador es mayor (o igual) a 5 <br/>
                - Si el contador es menor (o igual) a -10 <br/>
                - Si el contador es igual a 0
            </p>

            <button onClick={() => {setContador(contador+1)}} >+1</button>
            <button onClick={() => {setContador(contador-1)}} >-1</button>

            { contador >= 5 && <p>El contador es mayor o igual a 5</p> }
            { contador <= -10 && <p>El contador es menor o igual a -10</p> }

            { contador == 0 ? <p>El contador es 0</p> : <p>El contador NO es 0</p> }
        </div>
    )
}

export default Page
