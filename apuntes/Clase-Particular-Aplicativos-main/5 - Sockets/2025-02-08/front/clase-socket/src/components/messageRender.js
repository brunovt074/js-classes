import { useState, useEffect } from "react"

// Recordar que el socketProp.on va dentro de un useEffect sin dependencias
// La variable de estado se llamará arrayMensajesFront
// El valor inicial de los arrays siempre es []

export function MessageRender({ socketProp }) {
    // const [<variableEstado>, <funcionSetter>] = useState(<valorInicial>)
    const [arrayMensajesFront, setArrayMensajesFront] = useState([])

    // varEstado = algo     ESTÁ MAL
    // setVarEstado(algo)   ESTÁ BIEN

    useEffect(
        () => {
            socketProp.on("newMessageServer", (data) => {
                // guardar data dentro de la variable de estado arrayMensajesFront
                setArrayMensajesFront(data)
                console.log(data)
            })
        },
        []
    )

    // Generalmente para que el array.map sea más sencillo en react, lo ponemos directamente
    // dentro del return

    /*
        El array.map recibe un callback (funcion) y devuelve un nuevo array modificado

        El callback (funcion violeta) recibe 1 o 2 cosas:
            1.  Una variable de cualquier nombre que representa al "elemento actual" (OBLIGATORIO)
                Solemos llamar a esta variable "elemento"

            2.  Una variable de cualquier nombre que representa la "posicion actual" (OPCIONAL)
                Solemos llamar a esta variable "index"

        El callback SÍ O SÍ debe devolver algo
        Lo que devuelva el callback toma el lugar del elemento original
    */
    /*
        [
            {text: 'asd', userName: 'Matias'},
            {text: 'asd', userName: 'Luca'},
            {text: 'asd', userName: 'Ramiro'},
        ]
    */

    return( 
    <>
    {
        arrayMensajesFront.map(
            (elemento, index) => {return <p key={index} > <b> {elemento.userName}:</b> {elemento.text} </p>}
        )
    }
    </> 
    )
}
