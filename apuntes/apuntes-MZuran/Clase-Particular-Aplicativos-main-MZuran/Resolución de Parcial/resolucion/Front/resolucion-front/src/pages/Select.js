import { ComponenteSelect } from "@/components/componentePunto8"
import { useEffect, useState } from "react"

/*
    Quiero que se me haga un fetch al backend cuando el componente cargue por primera vez
    Y que cuando el fetch se cumpla, guardarme la info en una varibale de estado
*/

export default function PaginaSelect() {
    const [personas, setPersonas] = useState([])

    useEffect(
        () => {

            /* Aca tiene que ir el fetch */
            const fetchFuncion = async () => {
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
            
                    console.log('Respuesta del servidor:', responseData.contenido);
                    setPersonas(responseData.contenido)
            
                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }
            
            fetchFuncion()

        }, // Efecto
        [] // Dependencias
    )

    return (
        <>
        <h1 > Soy el select </h1>
        {
            personas.map(
                (elemento, index) => 
                <div key={index} ><p>Me llamo {elemento.nombre} {elemento.apellido} y tengo {elemento.edad} años</p></div>
            )
        }
        <ComponenteSelect listaPersonas={personas} />
        </>
    )
}