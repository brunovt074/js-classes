import { PrimerComponente } from "@/components/primerComponente";

export default function Home() {
  //    <PrimerComponente nombre={"Matias"} apellido={"Zuran"} edad={21}/>

  const personas = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 30 },
    { nombre: 'María', apellido: 'González', edad: 25 },
    { nombre: 'Carlos', apellido: 'Ramírez', edad: 40 },
    { nombre: 'Ana', apellido: 'López', edad: 22 },
    { nombre: 'Luis', apellido: 'Martínez', edad: 35 }
  ];

  return (
    <>
    <h1>Soy index.js</h1>
    {
      personas.map(
        (elemento, index) => {

          return <PrimerComponente 
          nombre={elemento.nombre} 
          apellido={elemento.apellido} 
          edad={elemento.edad}
          posicion={index}
          key={index}/>
        }
      )
    }
    </>
  );
}