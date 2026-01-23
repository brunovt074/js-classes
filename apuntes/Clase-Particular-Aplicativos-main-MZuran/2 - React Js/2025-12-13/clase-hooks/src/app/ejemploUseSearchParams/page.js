"use client"

import React from 'react'

import { useSearchParams } from 'next/navigation'

/*
  useSearchParams es un hook parecido al useRouter

  no recibe nada
  devuelve un objeto llamado searchParams

  searchParams tiene un método llamado .get()
*/

function Page() {

  const searchParams = useSearchParams()

  return (
    <div>
      <h1>Search params</h1>
      <p>
        El valor de la clave nombre es {searchParams.get("nombre")} <br/>
        El valor de la clave edad es {searchParams.get("edad")} <br/>
      </p>
    </div>
  )
}

export default Page
