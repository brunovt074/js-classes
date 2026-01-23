/*
    ¿Qué son los componentes?

    Si queremos cambiar de "Modo HTML" a "Modo Javascript" dentro del return, se tiene que escribir entre llaves

    Los componentes son ni más ni menos que FUNCIONES con algunas características especiales.

        1) Los componentes comunes SIEMPRE deben comenzar con una mayúscula.

        2) Los componentes SIEMPRE deben retornar por lo menos una etiqueta html vacía.
            return (<></>)

        3) Si se quiere que los componentes tengan cierta lógica asociada (código), se debe escribir dentro de la funcion
        pero antes del return

        4) Todos los componentes se deben exportar. 
            a. Los componentes comunes se pueden exportar de cualquier manera (generalmente con el export normal)
            b. Los componente página SIEMPRE se deben exportar con "export default"

            Para exportar una función en javascript, se debe escribir la palabra reservada "export" o "export default"
            antes de "function"

        5) Los componentes pueden recibir parámetros pero se deben escribir entre paréntesis y llaves a diferencia de sólo las llaves
            Si un componente recibe un parámetro, nosotros le vamos a llamar "prop"

            function Componente({prop1, prop2, propN})

            Hay un prop especial llamado "children". El prop "children" es todo el contenido que se escribe entre las etiquetas de
            apertura y cierre.

            Si nosotros queremos pasarle un prop común a un componente, se hace usando la siguiente sintaxis:

                <ComponenteUno nombre={"Matias"} edad={21} apellido={"Zuran"} />
*/

export function PrimerComponente({nombre, apellido, edad}) {


    return (
    <>
    <p>Me llamo {nombre} {apellido} y tengo {edad} años </p>
    </>
    )
}