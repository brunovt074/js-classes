/*
    El url lo podemos dividir en dos partes:

    http://localhost:3000/landing

    1) Dominio
    http://localhost:3000

    2) La ruta
    /landing

    Para nuestra aplicacion react, el dominio siempre va a ser el mismo
    Lo que cambia, es la ruta según cómo esté la carpeta pages

    El "root" de la ruta, siempre va a ser la carpeta src/pages/

    Entonces si escribimos http://localhost:3000/landing
    En realidad nos estamos refiriendo a src/pages/landing

    La palabra reservada "index" se usa para dejar un componente página "por default" de un directorio
*/

export default function Landing() {
 
    return(
    <>
    <h1>Landing Page</h1>
    </>
    )
}