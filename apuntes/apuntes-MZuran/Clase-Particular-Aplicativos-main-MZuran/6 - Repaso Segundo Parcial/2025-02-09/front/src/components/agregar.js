import { useState } from "react"

// Tiene 2 etiquetas input (type={"text"})
// Tiene una etiqueta button

// Debemos hacer un post que mande el nombre y que mande el encargado
// nombre y encargado deben tener variables de estado

// Debemos asociarles funciones a los inputs para que CADA VEZ QUE CAMBIEN se guarde la nueva info dentro de la variable de estado

export default function AgregarTarea({ socketProp, arrayTareasProp }) {

    const [nombre, setNombre] = useState("")
    const [encargado, setEncargado] = useState("")

    function nombreHandler(data) {
        const textoEnInput = data.target.value
        // console.log(textoEnInput)
        setNombre(textoEnInput)
    }

    function encargadoHandler(data) {
        const textoEnInput = data.target.value
        // console.log(textoEnInput)
        setEncargado(textoEnInput)
    }

    function buttonHandler() {

        // Debemos verificar que el nombre no exista ya en la lista
        // La forma más fácil es usando el array.some()
        // El array.some es una funcion que aplica un callback a todos los elementos de una lista
        // Si por lo menos 1 retorna true, entonces array.some retorna true
        const nombreRepetido = arrayTareasProp.some( (elemento) => elemento.nombre == nombre )

        if (nombreRepetido) {
            console.error("Se repitio el nombre")
            return
        }

        // Debe hacer un fetch POST
        const customFetch = async () => {
            const url = "http://localhost:4000"
            const urlFetch = url + "/crearTarea"
            const metodo = "POST" // puede ser "GET", "POST", etc
            const reqBody = { nombre: nombre, responsable: encargado }; // Modificar

            try {
                const response = await fetch(urlFetch, {
                    method: metodo,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(reqBody),
                });

                const responseData = await response.json();

                /* ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************ */

                console.log('Respuesta del servidor:', responseData);

            } catch (error) { console.error('Hubo un error en la solicitud:', error); }
        }

        customFetch()

        // Debemos usar nuestro socket para emitir un evento con id "tareaCreada"
        // Junto con la emision del evento, debe haber un objeto con nombre y responsable

        socketProp.emit('tareaCreada', { nombre: nombre, responsable: encargado })
    }

    return (
        <>
            <input type={"text"} onChange={nombreHandler} placeholder="Nombre Actividad" />
            <input type={"text"} onChange={encargadoHandler} placeholder="Nombre Encargado" />
            <button onClick={buttonHandler}>Agregar Tarea</button>
        </>
    )
}