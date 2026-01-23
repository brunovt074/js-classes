import React from 'react'
import { useEffect, useState } from 'react'

/*
    Cuando carga por primera vez haga un fetch al principio
    El fetch "descarga los datos" los cuales debemos guardar en una variable
    Recordar que para que se puedan guardar variables en react, necesitamos las de estado

    personas = responseData   **ESTÁ MAL**
    setPersonas(responseData) **ESTÁ BIEN**
*/

export function PersonasDisplay() {

    const [personas, setPersonas] = useState([])

    useEffect(
        () => {
            const customFetch = async () => {
                const url = "http://localhost:4000"
                const route = url + "/personas"
                const metodo = "GET" // puede ser "GET", "POST", etc

                console.log(route)
                try {
                    const response = await fetch(route, {
                        method: metodo,
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    const responseData = await response.json();

                    /*
                        ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************
                    */

                    console.log('Respuesta del servidor:', responseData.data);

                    // La idea es guardar el responseData dentro de la variable de estado personas
                    setPersonas(responseData.data)

                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }

            customFetch()
        },
        []
    )

    return (
        <>
            <h2>Display Personas</h2>
            {
                personas.map(
                    (elemento, index) => <div key={index}><p>Me llamo {elemento.nombre} y soy de {elemento.ciudad}</p></div>
                )
            }
        </>
    )
}

