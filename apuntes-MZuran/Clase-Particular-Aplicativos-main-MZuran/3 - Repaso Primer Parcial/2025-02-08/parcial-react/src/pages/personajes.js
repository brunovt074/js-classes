/* creamos el componente página */
/*
    Todos los componentes (comunes y página) son funciones
    Decimos que estas funciones tienen un número de características o particularidades
    - Los componentes COMUNES sí o sí con mayúscula
    - Tiene exportarse
        a. Los componentes comunes se exportan de cualquier manera ("export" o "export default")
        b. Los componentes página se exportan con "export default"
    - Deben como mínimo retornar una etiqueta HTML vacía
    - Pueden o no recibir parámetros.
        - Los parámetros van dentro de los paréntesis y dentro de llaves separados por comas
        - Si un componente recibe parámetros, estos ahora se llaman "props"
        - Los componentes página no suelen recibir props
*/

// Debemos hacer que algo se ejecute sólamente 1 vez cuando carga la página
// Para hacer esto, debemos meter la lógica dentro de un useEffect sin dependencias
/*
    El useEffect es una funcion que no devuelve nada
    El useEffect es una funcion que recibe 2 parametros:
        1.  Una función flecha. Esta función flecha le decimos "callback" o "efecto".
        2.  Un array. Este array lo llamamos "array de dependencias"

        useEffect(
            () => {},
            []
        )

    El callback "depende" del array porque es el array el cual le dice cuándo ejecutarse
    -   Si el array está vacío, el callback sólo se ejecuta 1 vez al principio
    
    -   Dentro del array de dependencias, metemos variables. Generalmente variables de estado.
        Si cualquiera de las variables cambia su valor, el callback se ejecuta de nuevo
*/

/*
    Las variables de estado NO pueden usar asignación
    arrayPersonajes = [{...}]       ESTÁ MAL
    setArrayPersonajes({...})       ESTÁ BIEN

    contadorEstado = contadorEstado + 1     MAL
    setContadorEstado(contadorEstado + 1)   BIEN
*/

/*
    arrayPersonajes.map()
    El .map es un método de arrays que devuelve un nuevo array transformado y recibe una función para pasar sus elementos
    El .map NO modifica el array original, sino que crea uno nuevo

    const arrayTransformado = arrayOriginal.map(funcionTransformacion)

    El array.map recibe por parámetro una función.
    Esta función suele llevar el nombre de callback.
    Para el .map, el callback suele ser una funcion flecha

        El callback en sí es una función que recibe sus propios parámetros.

        1.  El primer parámetro (OBLIGATORIO) simboliza el "elemento actual" y puede tener cualquier nombre
            Le solemos llamar "elemento"

        2.  El segundo parámetro (OPCIONAL) simboliza la posición del elemento actual del array. (Cualquier nombre)
            Le solemos llamar "index"

        El callback del .map DEBE tener devolución
        Lo que sea que devuelva la funcion aplicada a un elemento va a tomar su lugar en el nuevo array
*/

import { useEffect, useState } from "react"

import { Tarjeta } from "@/components/tarjeta"

export default function PaginaPersonajes() {
    // arrayPersonajes, valor inicial []
    const [arrayPersonajes, setArrayPersonajes] = useState([])
    const [pagina, setPagina] = useState(1)

    const urlApi = `https://rickandmortyapi.com/api/character?page=${pagina}`
    // const urlApi = `https://rickandmortyapi.com/api/character?page=` + pagina

    useEffect(
        () => {
            // Esta función "descarga" la info de los personajes según el url
            // Y la guarda en la variable de estado
            const customFetch = async () => {
                const ruta = urlApi
                const metodo = "GET" // puede ser "GET", "POST", etc

                try {
                    const response = await fetch(ruta, {
                        method: metodo,
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    const responseData = await response.json();

                    /* ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************ */

                    console.log('Respuesta del servidor:', responseData.results);

                    // debemos guardar el array que está guardado en responseData dentro de arrayPersonajes
                    setArrayPersonajes(responseData.results)

                    /* ************************************ DEJAR DE PROGRAMAR ************************************ */


                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }

            customFetch()

        },  //Callback
        [pagina]  //Array de dependencias
    )

    function nextHandler() {
        setPagina(pagina + 1)
    }

    function prevHandler() {
        if (pagina > 1) {
            setPagina(pagina - 1)
        }   
    }

    // Siempre que mapeemos un array a un componente de HTML es más cómodo hacerlo directamente sobre el return
    return (
        <>
            <h1>Personajes</h1>
            <h3>La pagina actual es {pagina}</h3>

            <button onClick={prevHandler} >prev</button>
            <button onClick={nextHandler} >next</button>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    arrayPersonajes.map(
                        (elemento, index) => {
                            return <Tarjeta
                                Nombre={elemento.name}
                                Status={elemento.status}
                                Especie={elemento.species}
                                Imagen={elemento.image}
                            />
                        }
                    )
                }
            </div>
        </>
    )
}

/*
    const nombre = "Matias"

    "string"
    'string'
    `Mi nombre es ${nombre}`
*/