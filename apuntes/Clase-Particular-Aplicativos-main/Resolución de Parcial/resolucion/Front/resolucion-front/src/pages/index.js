import { useEffect, useState } from "react";
import ComponentePunto7 from "@/components/componentePunto7";

/*
    El fetch solo debe realizarse una vez al principio de la página
    Eso quiere decir que el fetch debe ser el efecto del useEffect sin dependencias
*/

export default function Home() {
  const [personas, setPersonas] = useState([])

  useEffect(
    () => {

      const fetchPersonas = async () => {
        const url = "http://localhost:4000"
        const urlFetch = url + "/personas"
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
              La respuesta está guardada en la variable (que no es de estado) responseData
          */

          console.log(responseData.contenido);
          setPersonas(responseData.contenido);

        } catch (error) { console.error('Hubo un error en la solicitud:', error); }
      }

      fetchPersonas()

    }, // Efecto
    [] // Array de dependencias
  )

  return (
    <>
      <h1>Pagina del front</h1>
      {
        personas.map(
          (persona, index) => <p key={index}>Me llamo {persona.nombre} {persona.apellido} mi index es {index}</p>
        )
      }
      <ComponentePunto7/>
    </>
  );
}
