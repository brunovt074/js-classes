"use client"

import React from 'react'

import { useSearchParams } from 'next/navigation'

/*
  El hook useSearchParams es muy parecido al hook useRouter.

  useSearchParams() no recibe nada
  useSearchParams() devuelve un objeto llamado searchParams

  El objeto searchParams tiene métodos

  searchParams.get()
    Recibe un string que es la "clave" de un searchParam
    Devuelve el "valor" del searchParam por string

  searchParams.has()
    Recibe un string que es la "clave" de un searchParam
    Devuelve true o false dependiendo si la clave existe o no

  searchParams.toString()
    No recibe nada
    Devuelve simeplemente el search param
    "?nombre=tomas&edad=17"
*/

function Page() {

  const searchParams = useSearchParams()

  return (
    <div>
      <h1>Ejemplo useSearchParams</h1>
      <p>
        El nombre es { searchParams.get("nombre") } <br/>
        La edad es { searchParams.get("edad") }
      </p>
    </div>
  )
}

export default Page
