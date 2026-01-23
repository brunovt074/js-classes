/*
    El useEffect, al igual que el useState es un hook que viene en el paquete de react
    El 99.99999999999999999999% de las veces, si usas useEffect, seguramente uses useState también

    El useEffect es un hook que no devuelve nada
    El useEffect es un hook que recibe 2 parámetros:
    
        1) Es una función flecha (el callback) que generalmente se lo llama "El efecto"
        2) Es un array llamado "Array de dependencias"

    Por lo general un callback es una función que se pasa a otra función por definición la cual se ejecuta
    cuando se cumple cierta condicion.

    En el caso del onClick, el callback se ejecuta cuando el usuario hace click al componente

    Dentro del array de dependencias, vamos a meter variables de estado
    Cuando el valor de cualquiera de esas variables de estado cambia, se ejecuta el efecto

    Si el array de dependencias queda vacío, hará que el efecto se ejecute SÓLO CUANDO CARGA EL COMPONENTE POR PRIMERA VEZ
*/

import { useEffect, useState } from "react"

export default function EjUseEffect() {
    
    const [contador, setContador] = useState(0)

    useEffect(
        () => {

            if (contador == 10) {
                setContador(0)
            }

        }, // El efecto
        [contador] // El array de dependencias
    )
    
    const sumaHandler = () => {
        const suma = contador + 1
        setContador(suma)
    }

    return(
    <>
    <h1>Ejercicio Use Effect</h1>
    <p>El valor de mi contador es {contador}</p>

    <button onClick={sumaHandler} >+1</button>
    </>
    )
}