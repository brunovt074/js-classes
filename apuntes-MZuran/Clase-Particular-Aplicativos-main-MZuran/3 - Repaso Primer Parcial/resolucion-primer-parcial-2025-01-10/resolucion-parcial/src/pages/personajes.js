/*
    Los componentes de react (Tanto los comunes como los flecha) son FUNCIONES

    1)  Empiezan con mayúscula

    2)  Los componentes se EXPORTAN
        a.  Los componentes comunes se exportan con "export" (no obligatoriamente)
        b.  Los componentes pagina se exportan con "export default" (obligatoriamente)

    3)  Pueden recibir parámetros (llamados "props") dentro del paréntesis si le agregamos llaves
        function Tarjeta({nombre, apellido, edad, etc}) {...}

    4)  Tienen que retornar COMO MÍNIMO una tag HTML vacía
        return (<></>)
*/

import { Tarjeta } from "@/components/tarjetaEjemplo"
import { useEffect, useState } from "react"

export default function PaginaPersonajes() {

    /*
        El useState siempre devuelve algo. Devuelve un array con 2 componentes.

        const [<nombre varEstado>, <nombre setter>] = useState(<valor inicial>)
    */
    const [arrayPersonajes, setArrayPersonajes] = useState([])
    const [pagina, setPagina] = useState(1)

    /*
        Si el array de dependencias está vacío, el efecto sólo ocurre una vez sola
    */
    useEffect(
        () => {

            // Descarga personajes
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

                    console.log('Respuesta del servidor:', responseData);

                    setArrayPersonajes(responseData.results)

                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }
            customFetch()

        },  // El efecto. Callback.
        [pagina]  // Array de dependencias.
    )

    useEffect(
        () => {
            console.log("Cambió el array de personajes", arrayPersonajes)
        }, // Callback/Efecto

        [arrayPersonajes] // Array de dependencias
    )

    // Las funciones dentro del onClick llevan la palablra "handler" en su nombre(
    function nextHandler() {
        setPagina(pagina + 1)
    }

    function prevHandler() {
        if (pagina > 1) {
            setPagina(pagina - 1)
        }
    }

    return (
        <>
            <h1>Personajes</h1>
            <p>La página es {pagina}</p>

            <button onClick={prevHandler} >Prev</button>
            <button onClick={nextHandler} >Next</button>

            <div style={{ display: "Flex", flexWrap: "wrap" }}>
                {
                    arrayPersonajes.map(
                        elemento => 
                            <Tarjeta 
                                nombre={elemento.name} 
                                status={elemento.status} 
                                raza={elemento.species} 
                                foto={elemento.image} 
                                key={elemento.id} 
                            />
                    )
                }
            </div>
        </>
    )
}