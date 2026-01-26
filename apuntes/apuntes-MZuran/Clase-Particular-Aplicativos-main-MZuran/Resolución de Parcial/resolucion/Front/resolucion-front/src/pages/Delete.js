import { useState, useEffect } from "react"
import SelectDeleteComponent from "@/components/SelectDeleteComponent"

/*
    Cuando cargue la página, quiero que se haga un GET para conseguir el array de personas una sola vez (usando useEffect)
    Luego de hacer el get, quiero que SÓLO el array dentro del objeto se guarde en el componente en una variable de estado (usando useState)

    Una vez descargada la info del back con el get de arriba, mostrarla en pantalla con un map sin un componente personalizado

    Quiero que la página tenga un componente que se llame SelectDeleteCompontent
        A SelectDeleteComponent se le va a pasar por prop la lista de personas
        SelectDeleteComponent va a constar de un sólo botón y un sólo select con todas las opciones de personas mapeadas
        Al clickear el botón se debe enviar un DELETE al back que lleve un req.body con la siguiente forma:

            { identificador: apellido de la persona a borrar }
*/

export default function PaginaDelete() {
    const [ arrayPersonas, setArrayPersonas ] = useState([])

    useEffect(
        () => {

            const fetchFuncion = async () => {
                const url = "http://localhost:4000"
                const urlFetch = url + "/personas"
                const metodo = "GET" // puede ser "GET", "POST", etc
            
                try {
                    const response = await fetch(urlFetch, {
                        method: metodo,
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
            
                    const responseData = await response.json();
            
                    /*
                        ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************
                        La respuesta está guardada en la variable (que no es de estado) responseData
                    */
            
                    console.log('Respuesta del servidor:', responseData);
                    // responseData es un objeto
                    // yo quiero guardar dentro de arrayPersonas el array dentro del objeto

                    setArrayPersonas(responseData.contenido)
            
                } catch (error) { console.error('Hubo un error en la solicitud:', error); }
            }
            
            fetchFuncion()

        }, // Efecto
        [] // Dependencias
    )

    return(
    <>
    <h1>Pagina del delete</h1>
    {
        arrayPersonas.map(
            (elemento, index) => <div key={index} > <h4>Mi nombre es {elemento.nombre} y tengo {elemento.edad} años</h4> </div>
        )
    }
    <SelectDeleteComponent listaDePersonas={arrayPersonas} />
    </>
    )
}