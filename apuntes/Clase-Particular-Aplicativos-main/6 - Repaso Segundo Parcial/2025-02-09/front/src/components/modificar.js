/*
    <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select>
*/

import { useState } from "react"

export default function Modificar({ socketProp }) {

    const [nombre, setNombre] = useState("")
    const [estado, setEstado] = useState("")

    function nombreHandler(data) {
        const textoEnInput = data.target.value
        // console.log(textoEnInput)
        setNombre(textoEnInput)
    }

    function estadoHandler(data) {
        const textoEnInput = data.target.value
        console.log(textoEnInput)
        setEstado(textoEnInput)
    }

    function buttonHandler() {
        socketProp.emit('tareaModificada', { nombre: nombre, estado: estado })
    }

    return (
        <>
            <input type="text" onChange={nombreHandler}/>
            <select onChange={estadoHandler}>
                <option value="pendiente">Pendiente</option>
                <option value="en proceso">En proceso</option>
                <option value="realizada">Realizada</option>
            </select>
            <button onClick={buttonHandler}>Modificar</button>
        </>
    )
}