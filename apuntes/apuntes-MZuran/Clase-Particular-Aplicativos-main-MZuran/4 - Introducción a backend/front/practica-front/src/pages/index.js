import { url } from "@/utils/url";

export default function Home() {

  /*
    El customFetch es una funcion que recibe 3 parametros:
      1) un url (string)
      2) un método de ruta (en string y mayúscula ("GET", "POST", etc))
      3) req.body que se quiera enviar (un objeto y este es ocional)

      Si una funcion tiene un await adentro, se tiene que definir como async
  */

  async function buttonHandler() {
      const urlFetch = url + "/api/page/3"
      const metodo = "GET" // puede ser "GET", "POST", etc
      
      const reqBody = { nombre: "Juan", edad: 30 };
  
      try {
          const response = await fetch(urlFetch, {
              method: metodo, // Método de la solicitud
              headers: {
                  'Content-Type': 'application/json', // Indicamos que enviamos JSON
              },
              body: JSON.stringify(reqBody), // Convertir los datos a JSON
          });

          const responseData = await response.json(); // Parsear la respuesta JSON

          /*
              ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************
          */
          console.log('Respuesta del servidor:', responseData);

      } catch (error) { console.error('Hubo un error en la solicitud:', error); }
  

  }

  return (
    <>
      <h1>Soy el home</h1>
      <button onClick={buttonHandler} >Haceme click</button>
    </>
  );
}
