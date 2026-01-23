"use client"

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  function funcionIrAUseSearchParams() {
    const nombre = prompt("Ingrese su nombre")
    const edad = prompt("Ingrese su edad")

    const url = `/ejemplos/useSearchParams?nombre=${nombre}&edad=${edad}`

    router.push(url)
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => { router.push("/ejemplos/useState") } } >Ejemplo useState</button>
      <button onClick={ () => { router.push("/ejemplos/useEffect") } } >Ejemplo useEffect</button>
      <button onClick={ () => { router.push("/ejemplos/conditionalRendering") } } >Ejemplo conditional rendering</button>
      <button onClick={ () => { router.push("/ejemplos/Mapeo") } } >Ejemplo mapeo</button>
      <button onClick={ funcionIrAUseSearchParams } >Ejemplo useSearchParams</button>
    </div>
  );
}
