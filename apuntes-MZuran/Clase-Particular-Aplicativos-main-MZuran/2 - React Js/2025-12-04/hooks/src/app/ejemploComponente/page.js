import React from 'react'
import { PrimerComponente1, PrimerComponente2 } from '@/components/ejemploComponente'

export default function Page() {

  return (
    <div>
      <h1>Ejemplo Componente</h1>
      <PrimerComponente1 nombre={"Sebastian"} ></PrimerComponente1>
      <PrimerComponente2 nombre={"Francisco"} />
    </div>
  )
}