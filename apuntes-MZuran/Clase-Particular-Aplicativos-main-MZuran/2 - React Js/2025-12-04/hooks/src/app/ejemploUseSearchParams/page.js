"use client"

import React from 'react'

import { useSearchParams } from 'next/navigation'

/*
    Hook useSearchParams
    Un hook es una función que nos permite acceder a nuevas funcionalidades
    Siempre que usamos CUALQUIER hook, debemos utilizar "use client"

    useSearchParams es una función que devuelve el objeto searchParams
    este objeto searchParams tiene métodos

    searchParams.get()  -   Recibe una clave y devuelve el valor escrito en el url
*/

function Page() {

    const searchParams = useSearchParams()

    return (
        <div>
            <h1>Ejemplo useSearchParams</h1>
            <p>El searchParam que tiene la clave nombre es {searchParams.get("nombre")}</p>
            <p>El searchParam que tiene la clave edad es {searchParams.get("edad")}</p>
        </div>
    )
}

export default Page
