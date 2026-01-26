/*
    Acá nos definimos nuestro primer componente

    Todos los componentes son una función con un número de características:

        1) Todos los componentes sí o sí devuelven COMO MÍNIMO una tag html vacía
            return(<></>)

        2) Todos los componentes comunes DEBEN COMENZAR CON MAYÚSCULA SÍ O SÍ (rompe todo sino)

        3) Generalmente, los componentes se deben exportar
            a. Los componentes página sí o sí deben usar "export default"
            b. Los componentes comunes pueden usar cualquier tipo de export (yo estoy acustumbrado a "export")

        4) Si queremos que el componente tenga lógica de programación asociada, se debe escribir dentro de las llaves
           pero antes del return

        5) Para usar componentes COMUNES, se debe importar con "import" y utilizar de la misma forma como si fueran tags comunes

        6) Los parametros de los componentes se llamarán "props" y se reciben 
           de la misma forma que parametros comunes, pero entre llaves

        7) Si queremos renderizar una variable dentro del componente para que no sea texto plano, va entre llaves

        8) Para pasarle props a cualquier tag, debemos escribirla del siguiente modo
           <h1 claveProp={valorProp} nombre={"Matias"} ></h1>
*/

export function PrimerComponente({nombre, apellido, edad, posicion}) {

    /* Por acá metemos la lógica */

    return(
    <>
    <p>Hola, me llamo {nombre} {apellido} y tengo {edad} años. Mi posicion es {posicion} </p>
    </>
    )
}