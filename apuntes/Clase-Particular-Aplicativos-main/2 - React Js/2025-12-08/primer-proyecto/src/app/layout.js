"use client"

import { useRouter } from "next/navigation";

/*
  useRouter es una función que nos devuelve el objeto router.
  useRouter es una función que no recibe parámetros.

  Para inicializar el router debemos crear el objeto router de la siguiente forma

  const router = useRouter()

  El objeto router tiene varios métodos que debemos saber utilizar.

  router.push()
    El router.push() recibe un nuevo url o una nueva ruta y la añade al último
    lugar del historial. Además, redirecciona al usuario a ese nuevo destino.

  router.refresh()    //  No recibe nada
  router.forward()    //  No recibe nada
  router.back()       //  No recibe nada
*/


export default function RootLayout(props) {

  const router = useRouter()

  return (
    <html lang="en">
      <body>
        <button onClick={ () => { router.back() } } >←</button>
        <button onClick={ () => { router.forward() } } >→</button>
        
        <button onClick={ () => { router.push("/") } } >Ir a home</button>
        <hr/>
        {props.children}
      </body>
    </html>
  );
}

/*
  Un layout se comparte con la carpeta actual
  y todos sus hijos
*/