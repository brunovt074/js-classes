"use client"

import React from 'react'

import { useState } from 'react'

function Page() {

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    return (
        <div>
            <h1>Ejemplo conditional rendering</h1>
            <p>
                El valor de x es: {X} <br />
                El valor de y es: {Y} <br />
            </p>
            <button onClick={() => { setX(X + 1) }} >X + 1</button>
            <button onClick={() => { setX(X - 1) }} >X - 1</button>

            <br />
            <button onClick={() => { setY(Y + 1) }} >Y + 1</button>
            <button onClick={() => { setY(Y - 1) }} >Y - 1</button>

            <hr />
            <p>
                Esta sección te va a avisar: <br />
                * Si x es mayor a 7 <br />
                * Si x es menor a -2
            </p>

            {X > 7 && <p>X ahora mismo es mayor a 7</p>}
            {X < -2 && <p>X es menor a -2</p>}

            <p>
                Esta sección te va a avisar: <br />
                * Si y es positivo <br />
                * Si y no es positivo
            </p>

            {
                Y > 0 ?
                    <p>Y es positivo</p> :
                    <p>Y no es positivo (0 o negativo)</p>
            }

        </div>
    )
}

export default Page