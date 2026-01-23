import React, { useState } from "react";

export default function SelectComponent() {
    // Variable de estado para almacenar la opción seleccionada
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

    // Función que se ejecuta cuando cambia la opción seleccionada
    const handleSelectChange = (event) => {
        setOpcionSeleccionada(event.target.value); // Actualiza el valor del estado
    };

    function buttonHandler() {
        /* Acá iría un socket.emit o un fetch de tipo POST, GET, etc */
        /* Si se usa un socket acá adentro entonces ese se debería recibir por prop */

        if (opcionSeleccionada != "") {

            // Todo lo que está acá adentro sólo se va a ejecutar si el usuario selecciona una opcion
            console.log(opcionSeleccionada);

        }
    }

    /*
        Si queremos generar opciones en base a lo que conseguimos de un backend, entonces deberemos usar
        un array.map y recibir el array por prop
    */

    return (
        <div>
            <select value={opcionSeleccionada} onChange={handleSelectChange}>
                <option value="">Selecciona una opción</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
            </select>

            <button onClick={buttonHandler}>Enviar</button>
        </div>
    );
}
