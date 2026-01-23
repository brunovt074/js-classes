/*
    Los componentes en React, SON FUNCIONES que cumplen una serie de características
    1) El nombre usa PascalCase

    2) Siempre deben retornar como mínimo un tag HTML vacío entre paréntesis

    3) Los componentes siempre se deben exportar
            a. Los componentes de la carpeta /components se pueden exportar de cualquier forma
            b. Los componentes página de la carpeta /app se DEBEN exportar con "export default"

    4) Si el componente recibe parámetros, los recibe en forma de props
       Un prop es un parámetro que recibe el componente de react

    5) Si queremos que CUALQUIER componente guarde información, debemos usar 
       VARIABLES DE ESTADO
    
*/

"use client"

export function Button(props) {

    // Estamos recibiendo dentro de los props un onClick y un text

    return (
        <>
            <button onClick={props.onClick} >
                {props.text}
            </button>
        </>
    )
}