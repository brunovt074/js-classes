"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

function Layout(props) {

    const router = useRouter()

    return (
        <html>
            <body>
                <button onClick={() => {router.push("/")}}>Home</button>
                <button onClick={() => {router.back()}}>Atrás</button>
                <button onClick={()=>{router.forward()}}>Adelante</button>
                <hr/>
                {props.children}
                
            </body>
        </html>
    )
}

export default Layout

/*
    Sobre las urls nosotros podemos escribir objetos (queries)
    También llamados search params

    Si queremos escribir el objeto
    { nombre: "Matias", edad: 22, q: "Manzana" }

    Tenemos que hacer lo siguiente:

    1.  Escribimos un signo de pregunta al final del url
        Esto va a indicar que estamos por escribir una query

    2.  Después del signo de pregunta, escribimos las duplas de clave:valor con una sintaxis distinta
        La sintaxis va a ser clave=valor separados por ampersand (&)

    http://google.com/search?nombre=Matias&edad=22&q=Manzana
*/