import { useState } from "react";

export function ComponenteSelect({ listaPersonas }) {

    // Variable de estado para almacenar la opción seleccionada
    const [opcionSeleccionadaValor, setOpcionSeleccionadaValor] = useState("");

    // Función que se ejecuta cuando cambia la opción seleccionada
    const handleSelectChange = (event) => {
        setOpcionSeleccionadaValor(event.target.value); // Actualiza el valor del estado
    };

    // Variable de estado para almacenar el valor del input
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");

    // Función que se ejecuta cuando cambia el valor del input
    const handleNombreChange = (event) => {
        setNombre(event.target.value); // Actualiza el valor del estado
    };
    const handleApellidoChange = (event) => {
        setApellido(event.target.value); // Actualiza el valor del estado
    };
    const handleEdadChange = (event) => {
        setEdad(event.target.value); // Actualiza el valor del estado
    };


    function buttonHandler() {
        /* Acá iría un socket.emit o un fetch de tipo POST, GET, etc */
        /* Si se usa un socket acá adentro entonces ese se debería recibir por prop */

        // Yo quiero que la lógica se ejecute SÓLO si el usuario seleccionó algo antes de apretar el botón
        // Si opcion seleccionada es igual a vacío "", entonces el usuario no seleccionó nada
        if (opcionSeleccionadaValor != "") {

            console.log("El identificador es", opcionSeleccionadaValor)

            const dataParaEnviarAlBack = {
                indentificador: opcionSeleccionadaValor,
                dataNueva: {
                    nombre: nombre,
                    apellido: apellido,
                    edad: edad
                }
            }

            const postFunction = async () => {
                const url = "http://localhost:4000"
                const urlFetch = url + "/personas"
                const metodo = "PUT" // puede ser "GET", "POST", etc
                const reqBody = dataParaEnviarAlBack; // Modificar
            
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
            
            postFunction()

        }

        //Esto de acá es opcional
        location.reload()
    }

    return (
        <div>
            <select value={opcionSeleccionadaValor} onChange={handleSelectChange}>
                <option value="">Selecciona una opción</option>
                {
                    listaPersonas.map(
                        (elemento, index) => <option key={index} value={elemento.apellido} >{elemento.nombre} {elemento.apellido}</option>
                    )
                }
            </select>

            <br />
            <br />

            <input
                type="text"
                value={nombre}
                onChange={handleNombreChange} // Detecta cambios en el input
                placeholder="Escribe el nombre"
            />  {/* este es un input */}

            <input
                type="text"
                value={apellido}
                onChange={handleApellidoChange} // Detecta cambios en el input
                placeholder="Escribe el apellido"
            />  {/* este es un input */}

            <input
                type="text"
                value={edad}
                onChange={handleEdadChange} // Detecta cambios en el input
                placeholder="Escribe la edad"
            />  {/* este es un input */}

            <button onClick={buttonHandler}> Enviar </button>
        </div>
    );
}