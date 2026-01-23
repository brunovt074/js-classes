import { PrimerComponenteComun } from "@/components/primerComponente";

export default function Home() {
  return (
    <>
      <h1>Proyecto Front</h1>

      <PrimerComponenteComun nombre={"Matías"} apellido={"Zuran"} />
      <PrimerComponenteComun nombre={"Ramiro"} apellido={"Molina"} />
      <PrimerComponenteComun nombre={"Alex"} apellido={"Ogan"} />
      
    </>
  );
}
