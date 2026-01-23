import { useEffect, useState } from "react"
import Tarea from "@/components/tarea"
import AgregarTarea from "@/components/agregar"
import { io } from "socket.io-client"
import Modificar from "@/components/modificar"

// Debemos hacer que Home haga "algo" cuando carga por primera vez al principio
// Definir una variable de estado llamada arrayTareas
/*
    En una variable de estado definimos 3 elementos:
        1.  El nombre de la variable de estado
        2.  El nombre del setter
        3.  El valor inicial dentro de la variable de estado
    
    const [nombreVar, setNombreVar] = useState(valorInicial)
*/

/*
    ¿Qué parametros recibe un useEffect?
        1.  Una función flecha (callback, efecto)
        2.  Un array (array de dependencias)

    El array de dependencias debe estar vacío para que el callback sólo ejecute al principio
*/

// Se debe hacer un mapeo del array descargado al componente tarjeta

// socket.io del lado del front tiene que abrir una conexion utilizando la funcion io que viene de un paquete

export default function Home() {

    const [arrayTareas, setArrayTareas] = useState([])
    const [actualizacionLista, setActualizacionLista] = useState(0)

    function actualizarContadorLista() { setActualizacionLista(actualizacionLista + 1) }

    // Recordar que io se debe importar del paquete socket.io
    const socket = io("http://localhost:4000/")

    useEffect(() => {

        // Si nosotros queremos que el componente tenga un .on() generalmente irá dentro de este useEffect
        socket.on('avisoCreacion', actualizarContadorLista)
        socket.on('avisoModificacion', actualizarContadorLista)

        // Cuando un componente "muere" se ejecuta el return de su useEffect
        return () => {
            socket.removeAllListeners();
            socket.disconnect();
        }

    }, [socket]);

    useEffect(
        () => {
            const customFetch = async () => {
                const url = "http://localhost:4000"
                const urlFetch = url + "/tareas"
                const metodo = "GET" // puede ser "GET", "POST", etc

                try {
                    const response = await fetch(urlFetch, {
                        method: metodo,
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });

                    const responseData = await response.json();

                    /* ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************ */

                    console.log('Respuesta del servidor:', responseData.tareas);
                    setArrayTareas(responseData.tareas)

                    // ****************************************************************

                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }

            customFetch()
        },
        [actualizacionLista]
    )

    // La forma más facil de mapear un array a componentes es dentro del return
    /*
        arrayTareas.map() recibe 1 sólo parámetro
            1.  Una función flecha (callback)

            El callback recibe 1 o 2 parámetros
                1.  Un elemento (puede tener cualquier nombre)
                2.  Un index
        
            El callback DEBE devolver algo
    */
    return (
        <>
            <h1>Home</h1>
            {
                arrayTareas.map(
                    (elemento, index) => {
                        return <Tarea
                            nombre={elemento.nombre}
                            estado={elemento.estado}
                            responsable={elemento.responsable}
                            key={elemento.nombre}
                        />
                    }
                )
            }
            <AgregarTarea socketProp={socket} arrayTareasProp={arrayTareas}/>
            <br/>
            <br/>
            <Modificar socketProp={socket}/>
        </>
    )
}