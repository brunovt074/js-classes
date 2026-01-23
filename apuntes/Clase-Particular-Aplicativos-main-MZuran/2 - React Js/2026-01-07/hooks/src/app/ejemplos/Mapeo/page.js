const personas = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    mensaje: "Hola, soy Juan y me gusta programar."
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gómez",
    edad: 16,
    mensaje: "Estoy aprendiendo JavaScript."
  },
  {
    id: 3,
    nombre: "Lucas",
    apellido: "Fernández",
    edad: 32,
    mensaje: "Trabajo como desarrollador web."
  },
  {
    id: 4,
    nombre: "Sofía",
    apellido: "López",
    edad: 14,
    mensaje: "Me interesa la tecnología."
  },
  {
    id: 5,
    nombre: "Carlos",
    apellido: "Ramírez",
    edad: 19,
    mensaje: "Estoy empezando la universidad."
  }
];

/*
  Tenemos el array de personas que tiene la siguiente pinta:

  [{...},{...},{...},{...},{...},{...}]

  Nosotros queremos "transformarlo" a un array que se vea de la siguiente forma:

  [<Tarjeta/>,<Tarjeta/>,<Tarjeta/>,<Tarjeta/>,<Tarjeta/>,<Tarjeta/>]
*/

import Tarjeta from "@/components/Tarjeta";

export default function Page() {

  return (
    <div>
      <h1>Ejemplo Mapeo</h1>

      {
        personas.map(
          (elemento) => {
            return <Tarjeta
              nombre={elemento.nombre}
              apellido={elemento.apellido}
              mensaje={elemento.mensaje}
              key={elemento.id}
            >
            </Tarjeta>
          }
        )
      }
    </div>
  )
}