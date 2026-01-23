import React from 'react'

function Tarjeta(props) {

    // props.nombre
    // props.apellido

    // props.children

    return (
        <div>
            <hr/>
            <p>
                Mi nombre es {props.nombre} {props.apellido} <br/>
                El valor de children es {props.children}
            </p>
        </div>
    )
}

export default Tarjeta
