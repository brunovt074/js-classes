"use client"

import React from 'react'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

function Page() {

    const searchParams = useSearchParams()

    useEffect(
        () => {
            console.log("La clave nombre de la query tiene el valor", searchParams.get("nombre"))
            console.log("La clave edad de la query tiene el valor", searchParams.get("edad"))
        },
        []
    )

    return (
        <div>
            <h1>Visualizador de Search Params</h1>
            <p>Esta página hace 1 sóla vez un console.log con los params</p>
            <p>La clave nombre de la query tiene el valor {searchParams.get("nombre")}</p>
            <p>La clave edad de la query tiene el valor {searchParams.get("edad")}</p>
        </div>
    )
}

export default Page
