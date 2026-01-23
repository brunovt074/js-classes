/*
    Hook useState

    En react, le decimos "hook" a funciones que cambian el funcionamiento específico de un componente en particular
    Todas las funciones hook por lo general se importan

    useState y useEffect en particular, ya vienen instaladas con el paquete de react que se descarga
    cuando hacemos el proyecto

    useState es una función que te permite crear un TIPO ESPECIAL DE VARIABLE que puede "sobrevivir" a ser refrescada
    este tipo especial de variable la vamos a llamar "variable de estado"

    el useState se usa del siguiente modo para definir lo que se llama
        1) La variable de estado
        2) El SETTER de la variable de estado (tambien llama funcion asociada)

    ejemplo para definir una variable de estado contador

    const [ {Nombre de la variable de estado }, { El nombre de la funcion SETTER} ] = useState( valor inicial )

    const [contador, setContador] = useState(0)

    La ÚNICA FORMA de cambiar el valor de una variable de estado, es utilizando su setter
    El operador de asignacion (=) NO SIRVE PARA LAS VARIABLES DE ESTADO
*/

/*
    Si nosotros queremos que un tag (o compontente) tenga algún tipo de lógica de javascript

    Se le tiene que pasar por PROP una función SIN LOS PARENTESIS que se define antes del return

    En el caso de hacer algo cuando se le haga click, usamos el prop "onClick"
*/

import { useState } from "react"

export default function ejercicioUseState() {

    const [contador, setContador] = useState(0)

    function sumarUno() {
        setContador(contador + 1)
    }

    function restarUno() {

        if (contador > 0) {
            setContador(contador - 1)
        }   

    }

    return(
        <>
            <h1>Ejercicio sumar y restar</h1>

            <p> El valor actual de nuestro contador es {contador}</p>

            <button onClick={sumarUno} >+1</button>
            <button onClick={restarUno}>-1</button>
        </>
    )
}