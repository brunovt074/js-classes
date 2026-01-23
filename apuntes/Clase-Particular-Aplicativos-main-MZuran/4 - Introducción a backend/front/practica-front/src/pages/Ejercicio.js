import { useEffect, useState } from "react"
import { Personas } from "@/components/personas"

/*
    Hacer que la página haga un fetch al api (es un get) SÓLO cuando carga por PRIMERA VEZ
    El RESULTADO (o response) de ese fetch se debe guardar en la variable de estado personas
*/

/*
    Si una funcion tiene la palabra "await" dentro suyo, se debe declarar como funcion async
*/

export default function Ejercicio() {

    const [personas, setPersonas] = useState([])

    // Acá va la lógica ((hacer un fetch es logica))
    useEffect(
        () => {

            const fetchPersonas = async () => {
                const url = "http://localhost:4000"
                const urlFetch = url + "/api"
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

                    console.log('Respuesta del servidor:', responseData);

                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }

            fetchPersonas()

        }, // El efecto
        []  // Array de dependencias
    )

    return (
        <>
            <h1>Ejercicio</h1>
            {
                personas.map(
                     (personas, index) => 
                        < Personas nombre={personas.nombre} edad={personas.edad} ciudad={personas.ciudad} key={index} />
                )
            }
        </>
    )
}