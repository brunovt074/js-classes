/*
    ¿Qué es un componente?
        Un componente es una función que tiene ciertas características

        1) SIEMPRE Y ABSOLULAMENTE SIEMPRE comienzan con mayúsculas

        2) SIEMPRE Y ABSOLUTAMENTE SIEMPRE retornan al menos la mínima expresión de un bloque HTML entre paréntesis
        <></>

        3) SIEMPRE SE DEBEN EXPORTAR
            a. Si es un componente común, se usa la palabra clave "export" antes de function
            b. Si es un componente página se usa las palabras clave "export default" antes de function

        4) Si se quiere que el componente tenga lógica de javascript, se tiene que escribir dentro de la funcion pero antes del return

        5) Dentro de el return, sólo va a haber HTML. Si se quiere usar una variable o código js, se tiene que meter entre llaves {}

        6) Pueden recibir parámetros. Si un componente recibe un parámetro, se va a llamar un "prop"
            a. Los componentes página no suelen recibir props si usamos next

        7) Los props se reciben entre los paréntesis de la función, pero se tienen que añadir llaves {}

        8) Para pasrle un prop a un componente, se tiene que hacer de la siguiente forma

            <PrimerComponente nombreDelProp={valorDelProp} x={1234} />
*/

export function PrimerComponente({ x }) {

    // Por acá
    const nombre = "Matias"

    return ( <> 

    <h1>Hola Mundo</h1> 
    <p>Hola me llamo {nombre} y mi prop es {x} </p>

    </> )
}