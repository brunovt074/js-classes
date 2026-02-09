/*
📅 Clase 4: Bienvenidos a React (Next.js)
Instalación, JSX, Componentes y Props (El "Hola Mundo" real).
*/

/* ======================================================
Parte 1: Instalación (El Ritual de Iniciación)
======================================================

Instalación, JSX, Componentes y Props (El "Hola Mundo" real).
*/

/*
1. Explicación

Vamos a crear nuestro primer proyecto profesional.
React es una librería, pero Next.js es el framework (el esqueleto)
que usaremos para que todo funcione fácil.

Usaremos la terminal integrada de VS Code.
*/

/*
2. Paso a Paso

Abran una carpeta vacía en VS Code, abran la terminal
(Ctrl + ñ o Ver > Terminal) y escriban:

npx create-next-app@latest mi-primer-proyecto
*/

/*
ATENCIÓN: La terminal les hará preguntas.
Para trabajar igual que los ejemplos que vimos, respondan así:

• Would you like to use TypeScript? -> No
• Would you like to use ESLint? -> Yes
• Would you like to use Tailwind CSS? -> No (Por ahora usaremos estilos simples como en carrusel.js).
• Would you like to use src/ directory? -> Yes (Es más ordenado).
• Would you like to use App Router? -> NO (⚠️ Muy importante para seguir la estructura de index.js y _app.js que tienen de ejemplo).
• Would you like to customize the default import alias? -> No (Usaremos el @ por defecto).
*/

/*
Una vez termine, escriban:

cd mi-primer-proyecto
npm run dev

Para verificar que todo esté bien, abra http://localhost:3000
en el navegador
*/

/* ======================================================
Parte 2: Limpieza (Clean Up)
====================================================== */

/*
1. Explicación

Next.js viene con mucho "ruido"
(logos, estilos de ejemplo).

Vamos a limpiar la casa para empezar de cero.
*/

/*
2. Acción

1. Vayan a la carpeta src/pages.
2. Borren el contenido de index.js y déjenlo así:
*/

export default function Home() {
    return (
        <div>
            <h1>Hola Mundo desde React</h1>
        </div>
    );
}

/*
3. Borren el contenido de src/styles/globals.css
*/

/* ======================================================
Parte 3: Componentes y JSX (El corazón de React)
====================================================== */

/*
1. Explicación

En React no escribimos HTML suelto.
Escribimos Componentes.

• ¿Qué es un Componente?
  Es una función de JS que devuelve una "etiqueta HTML visual".

• Reglas de Oro:
  1. El nombre de la función empieza con Mayúscula (PrimerComponente).
  2. Debe retornar algo parecido a HTML (eso se llama JSX).
  3. Si retornas varias cosas, deben estar envueltas
     en una etiqueta padre o en un fragmento vacío <> </>.
*/

/*
2. Ejemplo

Vamos a crear una carpeta src/components
y dentro un archivo saludo.js.
*/

// src/components/saludo.js
export function Saludo() {
    // Lógica acá (si hubiera)
    const mensaje = "Bienvenido a mi web";

    return (
        <>
            <h2>{mensaje}</h2>
            <p>Este es mi primer componente.</p>
        </>
    );
}

/*
Explicación interesante:
Las llaves {} son para “escapar” de HTML
y volver a JavaScript (poner variables)
*/

/* ======================================================
Parte 4: Props (Pasando datos)
====================================================== */

/*
1. Explicación

Los componentes son reutilizables.
Pero si siempre dicen lo mismo, son aburridos.

Para pasarle información distinta a cada uno,
usamos las Props (Propiedades).

Funcionan igual que los parámetros
de una función normal.
*/

/*
2. Ejemplo (Basado en primerComponente.js)

En el Componente (Saludo.js):
Recibimos el objeto de props desestructurado { nombre }.
*/

export function Saludo({ nombre, edad }) {
    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h3>Hola, soy {nombre}</h3>
            <p>Y tengo {edad} años.</p>
        </div>
    );
}

/*
En la Página (index.js):
Importamos y usamos el componente
como si fuera una etiqueta HTML.
*/

import { Saludo } from "@/components/Saludo";

export default function Home() {
    return (
        <>
            <h1>Mis Amigos:</h1>
            <Saludo nombre="Matias" edad={21} />
            <Saludo nombre="Juan" edad={30} />
        </>
    );
}

/* ======================================================
📝 Ejercitación Integradora (El Map)
====================================================== */

/*
Consigna:

1. En tu index.js, crea un array de objetos llamado personas
   con 3 integrantes (nombre y edad).

2. Usa el método .map() dentro del JSX
   para transformar ese array en componentes <Saludo />.

3. No olvides pasarle la prop key
   (React la necesita para no quejarse).
*/

/*
Código Base para el alumno (para completar):
*/

import { Saludo } from "@/components/Saludo";

export default function Home() {

    // 1. Array de datos
    const personas = [
        { nombre: "Ana", edad: 25 },
        { nombre: "Pedro", edad: 40 },
        { nombre: "Sofía", edad: 19 }
    ];

    return (
        <>
            <h1>Lista de Invitados</h1>
            {
    personas.map( (persona) => {
        return (
            <Saludo
                
                nombre={persona.nombre}
                edad={persona.edad}
            />
        )
    })
}
        </>
    );
}

/* ======================================================
💡 Solución del Ejercicio
====================================================== */

{
    personas.map( (persona, index) => {
        return (
            <Saludo
                key={index}
                nombre={persona.nombre}
                edad={persona.edad}
            />
        )
    })
}
