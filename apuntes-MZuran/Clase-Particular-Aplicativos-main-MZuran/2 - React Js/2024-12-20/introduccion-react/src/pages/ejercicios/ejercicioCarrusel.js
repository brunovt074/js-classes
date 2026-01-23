const arrayImagenes = [
    "https://i5.walmartimages.com/seo/Fresh-Banana-Fruit-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg",
    "https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg",
    "https://www.gob.mx/cms/uploads/image/file/425838/Pera_3.jpg"
]

/*
    En este archivo tenemos un array de urls que va a simbolizar lo que nosotros conseguimos de un backend

    Quiero hacer un componente llamado <Carrusel/> que reciba como prop un url y lo renderice en un <img/>
    Vamos a tener una variable de estado llamada "página"

    Carrusel va a renderizar por prop el arrayImagenes[pagina]

    Cuando se presiona el botón Siguiente, la página incrementa en 1 hasta llegar a su maximo
    Cuando llega a su maximo, la pagina vuelve a 0
*/
import { useState } from "react"

import { ComponenteCarrusel } from "@/components/carrusel"

export default function ejercicioCarrusel() {
    const [pagina, setPagina] = useState(0)

    function pageHandler() {

        if (pagina >= arrayImagenes.length - 1) {
            setPagina(0)
        } else {
            setPagina(pagina + 1)
        }
    }

    return (
        <>
            <h1>Ejercicio de carrusel</h1>
            <p>El carrusel tiene {arrayImagenes.length} elementos</p>
            <p>Pagina: {pagina}</p>
            <button onClick={pageHandler} >Siguiente</button>
            <br/>
            <ComponenteCarrusel urlProp={arrayImagenes[pagina]}/>
            
        </>
    )
}