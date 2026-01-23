"use client"

import { useRouter } from "next/navigation";

/*
  La función de un router es tomar un URL y asociarlo a una dirección ip
  Si nosotros queremos USAR EL ROUTER dentro de nuestra aplicación, necesitamos el hook useRouter

  useRouter es un hook que NO recibe parámetros 
  useRouter es un hook que devuelve un objeto llamado router

  Un método es una función guardada dentro de un objeto  
  El objeto router tiene varios métodos

  router.push()
    Es un método que no devuelve nada
    Es un método que recibe una ruta de url (sin la base) que redirecciona al usuario a la ruta ingresada

  router.back()
  router.forwards()
  router.refresh()

*/

export default function RootLayout({ children }) {

  const router = useRouter()

  return (
    <html lang="en">
      <body>
        <button onClick={() => { router.back() }} >Atrás</button>
        <button onClick={() => { router.forward() }} >Adelante</button>
        <button onClick={() => { router.push("/") }} >Home</button>
        <button onClick={() => { router.refresh() }} >Refresh</button>
        {children}
      </body>
    </html>
  );
}

/*
  La función del layout es compartir HTML con todos los page.js en la carpeta actual y en las carpetas hijas
  El prop "children" simboliza el contenido de las páginas
*/