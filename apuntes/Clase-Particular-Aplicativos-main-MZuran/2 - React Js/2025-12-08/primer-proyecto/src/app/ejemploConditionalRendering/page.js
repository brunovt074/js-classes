"use client"
import { useState } from 'react'

import React from 'react'

function Page() {

    const [contador, setContador] = useState(0)

    return (
        <div>
            <h1>Ejemplo conditional rendering</h1>
            <p>
                Esta página nos va a mostrar 2 posibles mensajes: <br />
                El primero sale si el valor del contador es mayor a 10 <br />
                El segundo sale si el valor del contador es menor a -5 <br />
                El valor del contador es {contador}
            </p>

            <button onClick={() => { setContador(contador + 1) }} >+1</button>
            <button onClick={() => { setContador(contador - 1) }} >-1</button>

            {contador > 10 && <p>El contador es muy alto! (Contador mayor a 10)</p>}
            {contador < -5 && <p>El contador es muy bajo! (Contador menor a -5)</p>}

            {contador > 0 ?
                <p>El contador es positivo</p> :
                <p>El contador es negativo o es cero</p>
            }

        </div>
    )
}

export default Page
