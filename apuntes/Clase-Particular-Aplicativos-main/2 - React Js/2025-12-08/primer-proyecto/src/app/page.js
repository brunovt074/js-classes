"use client"

import React from 'react'
import { PrimerComponente } from '@/components/primerComponente'

import { useRouter } from 'next/navigation'

/*
  ¿Cómo usamos nuestro componente?
  Un componente es básicamente una etiqueta HTML personalizada
  Se utiliza exactamente igual que un html
*/

function Page() {

  const router = useRouter()

  function clickHandlerUseState() { router.push("/ejemploUseState") }
  function clickHandlerUseEffect() { router.push("/ejemploUseEffect") }
  function clickHandlerConditionalRendering() { router.push("/ejemploConditionalRendering") }
  function clickHandlerUseSearchParams() { 

    const nombre = prompt("Ingrese su nombre")
    const edad = prompt("Ingrese su edad")

    const ruta = "/ejemploUseSearchParams?nombre=" + nombre + "&edad=" + edad

    router.push(ruta) 
  }

  return (
    <div>
      <h1>Home</h1>
      <hr/>
      <h3>Navegación </h3>

      <button onClick={clickHandlerUseState} >Ir al ejemplo de useState</button>
      <button onClick={clickHandlerUseEffect} >Ir al ejemplo de useEffect</button>
      <button onClick={clickHandlerConditionalRendering} >Ir al ejemplo de conditional rendering</button>
      <button onClick={clickHandlerUseSearchParams} >Ir al ejemplo de useSearchParams</button>

      <PrimerComponente nombre={"Matias"} ></PrimerComponente>
      <PrimerComponente nombre={"Alex"} ></PrimerComponente>
      <PrimerComponente nombre={"Ramiro"} ></PrimerComponente>
      <PrimerComponente nombre={"Luca"} ></PrimerComponente>
    </div>
  )
}

export default Page
