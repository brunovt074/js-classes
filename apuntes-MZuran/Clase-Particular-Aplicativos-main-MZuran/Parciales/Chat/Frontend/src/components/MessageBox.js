import React from 'react'

/*
    Este componente debe recibir 3 props:
    usuario
    mensaje
    timeStamp

    Después de recibir estos props los debe renderizar dentro del return
*/

/*
    Si nosotros queremos renderizar información de js dentro de una etiqueta
    HTML en react, debemos encerrar el nombre de las variables entre llaves

    {x}
*/
function MessageBox2(props) {

    return (
        <div>
            <hr/>
            <p><b>{props.usuario}</b>: {props.mensaje} <i>{props.timeStamp}</i></p>
        </div>
    )
}

function MessageBox({usuario, mensaje, timeStamp}) {

    return (
        <div>
            <hr/>
            <p><b>{usuario}</b>: {mensaje} <i>{timeStamp}</i></p>
        </div>
    )
}

export default MessageBox
