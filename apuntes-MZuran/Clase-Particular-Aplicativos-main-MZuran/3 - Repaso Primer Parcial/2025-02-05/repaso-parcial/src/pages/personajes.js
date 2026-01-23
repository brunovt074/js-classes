// ¿Cómo armo un componente pagina?
/*
    Todos los componentes son funciones

    Todos los componentes deben ser exportados
        a. Los componentes página se exportan con "export default"
        b. Los componentes comunes se exportan de cualquier manera

    Los componentes pueden recibir o no props
        a. Los componentes página no suelen recibirlos
*/

import { Tarjeta } from "@/components/tarjeta"
import { useEffect, useState } from "react"

export default function paginaPersonajes() {

    // Crear variable de estado
    const [arrayPersonajes, setArrayPersonajes] = useState([])
    // Aca habría que poner una nueva variable de estado llamada "página"
    /*
        La página hubiera tenido botones asociados +1 y -1
        La página puede ir de 1 para arriba y si se cambia hubiera cambiado la variable urlApi
    */
    //  "https://rickandmortyapi.com/api/character?page=" + pagina

    const urlApi = "https://rickandmortyapi.com/api/character?page=1"

    /*
        Por ultimo se hubiera metido la variable de estado página dentro del array de dependencias de la descarga
        Si cambia la pagina, la descarga se hubiera ejecutado de nuevo con otro url y las tarjetas se hubieran actualizado
        solas.
    */

    /*
        NO SE PUEDE USAR ASIGNACION CON VARIABLES DE ESTADO
            arrayPersonajes = responseData.results      (MAL)
            setArrayPersonajes(responseData.results)    (BIEN)
    */

    const url = "https://acdn.mitiendanube.com/stores/001/219/229/products/banana1-39d62a544fc16a2b8016025979095295-640-0.jpg"


    // Queremos hacer un useEffect que sólo ejecute una vez al principio
    useEffect(
        () => {
            // Meter funcion de descarga
            const descargaFetch = async () => {
                // -----------------------------------------------------
                const urlFetch = urlApi
                // -----------------------------------------------------

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

                    // responseData es el objeto que nos dio el servidor
                    console.log('Respuesta del servidor:', responseData);

                    // guardar responseData.results dentro de arrayPersonajes
                    setArrayPersonajes(responseData.results)

                    console.log("La variable arrayPersonajes es", arrayPersonajes)

                    /*
                        ************************************ PROGRAMAR ************************************
                    */

                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }

            descargaFetch()
        },          // Efecto o Callback
        []          // Array de dependencias
    )

    /*
        [{},{},{},{},{},{}]
        [Rick,Morty,Summer]
        [ <p>Hola estoy transformado</p>, <p>Hola estoy transformado</p>, <p>Hola estoy transformado</p>, <p>Hola estoy transformado</p>]

        array.map()
    */
    return (
        <>
            <h1>Personajes</h1>
            {
                arrayPersonajes.map(
                    (elemento, index) =>
                        <Tarjeta
                            Nombre={elemento.nombre}
                            Especie={elemento.species}
                            Status={elemento.status}
                            Imagen={elemento.image}
                            key={index}
                        />
                )
            }
        </>
    )
}