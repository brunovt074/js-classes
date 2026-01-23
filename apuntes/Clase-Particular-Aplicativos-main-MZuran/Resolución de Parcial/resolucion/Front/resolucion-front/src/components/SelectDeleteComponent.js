import React from 'react'
import { useState } from 'react';

function SelectDeleteComponent({ listaDePersonas }) {
    // Variable de estado para almacenar la opción seleccionada
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

    // Función que se ejecuta cuando cambia la opción seleccionada
    const handleSelectChange = (event) => {
        setOpcionSeleccionada(event.target.value); // Actualiza el valor del estado
    };

    function buttonHandler() {
        /* Acá iría un socket.emit o un fetch de tipo POST, GET, etc */
        /* Si se usa un socket acá adentro entonces ese se debería recibir por prop */
        console.log(opcionSeleccionada);

        if (opcionSeleccionada != "") {

            // Todo lo que está acá adentro sólo se va a ejecutar si el usuario selecciona una opcion
            /* { identificador: apellido de la persona a borrar } */

            const dataAEnviar = { identificador: opcionSeleccionada }

            const deleteFunction = async () => {
                const url = "http://localhost:4000"
                const urlFetch = url + "/personas"
                const metodo = "DELETE" // puede ser "GET", "POST", etc
                const reqBody = dataAEnviar; // Modificar
            
                try {
                    const response = await fetch(urlFetch, {
                        method: metodo,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(reqBody),
                    });
            
                    const responseData = await response.json();
            
                    /*
                        ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************
                    */
            
                    console.log('Respuesta del servidor:', responseData);
            
                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }
            
            deleteFunction()

        }

        location.reload()
    }

    /*
        Si queremos generar opciones en base a lo que conseguimos de un backend, entonces deberemos usar
        un array.map y recibir el array por prop
    */

    return (
        <div>
            <select value={opcionSeleccionada} onChange={handleSelectChange}>
                <option value="">Selecciona una opción</option>
                {
                    listaDePersonas.map(
                        (elemento, index) => <option key={index} value={elemento.apellido}>{elemento.nombre} {elemento.apellido}</option>
                    )
                }
            </select>

            <button onClick={buttonHandler}>Enviar</button>
        </div>
    );
}

export default SelectDeleteComponent
