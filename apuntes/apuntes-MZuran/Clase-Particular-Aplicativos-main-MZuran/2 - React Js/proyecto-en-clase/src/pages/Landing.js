/*
    Los nombres de los archivos o carpetas que se encuentren dentro de pages, 
    se transforman automáticamente en una URL nueva

    La única excepción van a ser los archivos que se llamen "index.js" (se vuelven la ruta default)

    Si queremos acceder a nuestro Landing.js, debemos meter en el navegador este URL

    root/Landing
*/

export default function PrimerComponentePagina() {

    // Acá iría la lógica

    return(
        <>
            <h1>Hola soy la landing page</h1>
        </>
    )
}