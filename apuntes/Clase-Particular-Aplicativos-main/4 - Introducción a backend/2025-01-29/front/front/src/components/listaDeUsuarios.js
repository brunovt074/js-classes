/*
    Los componentes de react tienen la costumbre de, por algún motivo u otro
    recargarse constantemente

    Una de las razones por las cuales se recargan, es cuando cambian el valor de una variable de estado

    Un reinicio constante nos genera muchos problemas a la hora de descargas de datos de internet
    Es por eso que todos los fetch deben ser realizados de MANERA CONTROLADA

    Maneras de controlar la ejecución de un fetch incluyen:
    useEffect (hay que tener cuidado con el array de dependencias)
    un botón
*/

/*
    Cuando este componente cargue POR PRIMERA VEZ quiero que se descarguen los usuarios

    Una vez que tenemos el array de personas, debemos guardarlas en una variable (QUE SOBREVIVA REFRESCARSE)

    y mostralos en pantalla (usando map)
*/

import { useEffect, useState } from "react"
import TarjetaPersona from "./tarjetaPersona"

function ListaUsuarios() {

    const [arrayPersonas, setArrayPersonas] = useState([])

    useEffect(
        () => {
            const customFetch = async () => {
                const url = "http://localhost:4000"
                const urlFetch = url + "/usuarios"
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
                    setArrayPersonas(responseData.results)

                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }

            customFetch()
        },
        []
    )

    return (
        <>
            {
                arrayPersonas.map(
                    elemento =>
                        <TarjetaPersona
                            name={elemento.nombre}
                            age={elemento.edad}
                            job={elemento.ocupacion}
                            city={elemento.ciudad}
                            key={elemento.id}
                        />
                )
            }
        </>
    )
}

export default ListaUsuarios
