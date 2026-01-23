/*
    6) React, por default, NO PUEDE ASIGNAR NUEVOS VALORES A SUS VARIABLES.
        Las variables tipo "const" al no cambiar a veces sí se pueden usar (no recomendable)

        Para solucionar este problema, se desarrolló un "hook" para un nuevo tipo de variables.
        Un "hook" es una funcion especial de react que modifica el comportamiento de un componente en particular

        El hook que vamos a utilizar, se llama "useState"

        useState sirve para crear un NUEVO TIPO DE VARIABLE que pueda "sobrevivir" a las recargas
        este nuevo tipo de variable se llama "variable de estado"
    
    ¿Cómo se usa useState?

    useState consiste de 3 partes:
        1. El nombre de la nueva variable de estado
        2. El nombre de la funcion "setter" de la nueva variable de estado
        3. El valor inicial de la variable de estado

    const [nombreVariable, nombreSetter] = useState(valorInicial)

    El operador asignacion NO FUNCIONA con las variables de estado.
        Escribir contador = 1 NO HACE NADA
        En lugar de usar asignacion, debemos usar el setter para cambiar su valor

        NO HACER:
        contador = 1
        contador = contador + 1
        etc

        HACER:
        setContador(1)
        setContador(contador + 1)
        etc
*/

import { useState } from "react"

export function SegundoComponente() {

    const [contador, setContador] = useState(0)

    return (
    <>
    <p>El valor de mi contador es {contador}</p>
    </>
    )
}