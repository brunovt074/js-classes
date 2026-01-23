
import { PrimerComponente } from "@/components/PrimerComponente";

export default function Home() {
  return (
    <>
      <h1>Página Home</h1>
      <PrimerComponente
        nombre={"Matias"}
        apellido={"Zuran"}
        edad={22}
      ></PrimerComponente>

      <PrimerComponente
        nombre={"Felipe"}
        apellido={"Cogorno"}
        edad={17}
      ></PrimerComponente>

      <PrimerComponente
        nombre={"Bautista"}
        apellido={"Cogorno"}
        edad={17}
      ></PrimerComponente>
    </>
  );
}
