/*
    Un hook en react es simplemente una función que altera el funcionamiento de los componentes

    useState es un hook (funcion) que te sirve para definir un nuevo tipo de variable
    Esta variable se llama la "variable de estado"

    useStaate te devuelve un contador y su setter dentro de un array

    Para usar el useState, se tiene que tener la siguiente sintaxis:

    const [(nombre de la varible), (funcion setter de la variable)] = useState(valor inicial)

    const [contador, setContador] = useState(0)
    
    1) El nombre de la variable de estado
    2) El nombre de su "setter"
    3) El valor inicial de la variable de estado

    ¿Cómo se usa una variable de estado?
    Se usan exactamente igual que cualquier otra variable, con una sola diferencia.
    No pueden usar asignacion. La asignación es poner un "=" ( const x = 1 )

    La única forma de cambiar lo que guarda la variable de estado, es usando su "setter"

    En lugar de hacer 
        contador = 1
    Se tiene que hacer
        setContador(1)
*/
import { useState } from "react"

export default function PaginaPerfil() {

    const [contador, setContador] = useState(0)

    function buttonHandler1() {
        setContador(contador + 1)
    }

    function buttonHandler2() {

        if (contador == 0) {

        } else {
            setContador(contador - 1)
        }
        
    }

    return (
        <>
            <h1>Pagina de Perfil</h1>
            <p> El valor del contador de estado es {contador}</p>

            <button onClick={buttonHandler1} >+1</button>
            <button onClick={buttonHandler2}>-1</button>
        </>
    )
}