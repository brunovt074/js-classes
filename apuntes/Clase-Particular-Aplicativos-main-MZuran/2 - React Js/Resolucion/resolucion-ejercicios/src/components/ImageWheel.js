import { useState } from "react"

export function ImageWheel({ImageArray}) {

    const [contador, setContador] = useState(0)

    function siguientePagina() {
        setContador( contador + 1 )

        if (contador >= 2) { setContador(0) }
    }

    return (
    <>
    <img src={ ImageArray[contador]} ></img>
    <p>La página está en {contador}</p>
    <button onClick={siguientePagina} >Siguiente Página</button>
    </>
    )
}