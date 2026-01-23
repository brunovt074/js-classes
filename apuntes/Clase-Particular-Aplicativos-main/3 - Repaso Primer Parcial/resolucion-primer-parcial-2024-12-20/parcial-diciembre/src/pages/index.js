import { useState, useEffect } from "react";
import { Tarjeta } from "@/components/Tarjeta";

export default function Home() {
  const [pagina, setPagina] = useState(1)
  const [arrayDePersonajes, setArrayDePersonajes] = useState([])

  useEffect(
    () => {

      const customFetch = async () => {
        const url = "https://rickandmortyapi.com"
        const urlFetch = url + "/api/character?page=" + pagina
        const metodo = "GET" // puede ser "GET", "POST", etc

        try {
          const response = await fetch(urlFetch, {
            method: metodo,
            headers: {
              'Content-Type': 'application/json',
            }
          });

          const responseData = await response.json();

          /*
              ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************
          */

          console.log('Respuesta del servidor:', responseData.results);
          setArrayDePersonajes(responseData.results)

        } catch (error) { console.error('Hubo un error en la solicitud:', error); }
      }

      customFetch()
    },
    [pagina]
  )

  useEffect(
    () => {
      console.log("Los personajes son", arrayDePersonajes)
    },
    [arrayDePersonajes]
  )

  function nextHandler() {
    setPagina(pagina + 1)
  }

  function prevHandler() {

    if (pagina == 1) {

    } else {
      setPagina(pagina - 1)
    }

  }

  return (
    <>
      <h1>Resolucion primer parcial</h1>
      <p>Page: {pagina}</p>
      <button onClick={nextHandler} >Next</button>
      <button onClick={prevHandler} >Prev</button>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      {
        arrayDePersonajes.map(
          (elemento) => <Tarjeta nombre={elemento.name} raza={elemento.species} foto={elemento.image} status={elemento.status} />
        )
      }
      </div>
    </>
  );
}
