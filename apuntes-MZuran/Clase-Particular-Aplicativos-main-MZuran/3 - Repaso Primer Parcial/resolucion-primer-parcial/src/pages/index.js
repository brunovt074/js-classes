import { Tarjeta } from "@/components/Tarjeta";
import { customFetch } from "@/utils/customFetch";
import { useState, useEffect } from "react";

/*
    Las funciones asincronas se declaran con la palabra clave "async" antes de "function"
    Si uno quiere ESPERAR a que una funcion asíncrona termine antes de continuar la ejecución,
    Se usa la palabra clave "await"
*/

/*
    SIEMPRE QUE DESCARGUEMOS DATOS DE INTERNET, SE TIENE QUE HACER DE MANERA CONTROLADA
    Generalmente sólo los necesitamos cuando el componente CARGA POR PRIMERA VEZ
*/

export default function Home() {

  /*
    TODAS LAS VARIABLES DE ESTADO USAN SU FUNCION SETTER EN LUGAR DE ASIGNACION
  */
  const [resultado, setResultado] = useState([])
  const [pagina, setPagina] = useState(1)
  const [arrayMapeado, setArrayMapeado] = useState([])

  let url = "https://rickandmortyapi.com/api/character?page=" + pagina
  let metodo = "GET"

  /* 
    El useEffect es una función que recibe 2 parametros:
      a. Una función flecha (el efecto)
      b. Un array (el array de dependencias)

    Un efecto que no depende de nada SÓLO se ejecuta cuando carga el componente
  */

  function fetchCharactersPromise(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        /*
            Data es la PROMESA del objeto del fetch
            Si se guarda data en una variable
            Lo que se guarda realmente es la promesa
        */ 
       
        console.log("Se hace la descarga")
        setResultado(data.results)
        console.log("El resultado prometido es", resultado)
       })
  }

  // El efecto de descarga
  useEffect(
    () => {

      /* descargar() */
      console.log("Se ejecutó el efecto")
      fetchCharactersPromise(url)

    }, // Efecto

    [pagina] // El array de dependencias
  )

  // El useEffect que depende de el resultado
  useEffect(
    () => {
      console.log("El efecto del resultado muestra", resultado)

      // El mapeo
      const variableAuxiliar = resultado.map(
        elemento => <Tarjeta nombre={elemento.name} raza={elemento.species} foto={elemento.image} status={elemento.status}/>
      )

      setArrayMapeado(variableAuxiliar)

    }, // Efecto
    [resultado] // Array de dependencias
  )

  function siguientePagina() {
    setPagina(pagina + 1)
  }

  function paginaAnterior() {
    if (pagina > 1) {
      setPagina(pagina - 1)
    }
  }

  return (
    <>
      <h1>Resolucion de parcial</h1>
      <p>Pagina: {pagina}</p>

      <button onClick={siguientePagina} >+1</button>
      <button onClick={paginaAnterior} >-1</button>

      <div style={{display: "flex", flexWrap: "wrap"}}>
      
      { arrayMapeado }
      </div>
    </>
  );
}
