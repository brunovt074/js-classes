"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

/*
    En las URLs, podemos escribir un objeto para que la página web tenga información precargada
    Un objeto escrito sobre el url se va a llamar una query (también llamados search params)

    Si nosotros queremos USAR LOS SEARCH PARAMS, usamos el hook useSearchParams

    Para escribir los seach params sobre un url, debemos seguir la siguiente sintaxis:

        0)  La query siempre va al final
        1)  La query va a comenzar después del signo de pregunta
        2)  Sobre la query, escribimos pares de "clave"="valor" separadas por un "&"

    ?nombre=matias&edad=22

    El useSearchParams es un hook que no recibe nada 
    El useSearchParams es un hook que devuelve el objeto "searchParams"a

    searchParams tiene varios métodos

    searchParams.get()
        Recibe la "clave" de un parámetro
        Devuelve el "valor" de la clave ingresada
*/

function Page() {

    const searchParams = useSearchParams()

    return (
        <div>
            <h1>Ejemplo useSearchParams</h1>
            <p>
                La clave "nombre" tiene como valor {searchParams.get("nombre")} <br />
                La clave "edad" tiene como valor {searchParams.get("edad")} <br />
            </p>
        </div>
    )
}

export default Page
