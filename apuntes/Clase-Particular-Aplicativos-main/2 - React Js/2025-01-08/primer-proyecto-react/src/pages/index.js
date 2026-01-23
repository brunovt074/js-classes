import { PrimerComponente } from "@/components/primerComponente";

export default function Home() {
  return (
    <>
    <h1>Soy el index</h1>

    <PrimerComponente nombre={"Matias"} apellido={"Zuran"} edad={21} />
    <PrimerComponente nombre={"Pepe"} apellido={"Molina"} edad={11} />

    </>
  );
}