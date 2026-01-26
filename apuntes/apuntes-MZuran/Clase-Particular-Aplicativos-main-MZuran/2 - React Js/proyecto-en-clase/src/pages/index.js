/*
    Para Importar componentes, se debe escribir "import" y luego el nombre del componente
      a. Si es un componente que sólo tiene "export" (el común), el nombre va entre llaves {}
      b. Si es un componente que tiene "export default" (las páginas), el nombre va así nomás
*/
import { PrimerComponente } from "@/components/primerComponente"

/*
    Para levantar el proyecto FRONTEND hecho en react, se tiene que agarrar el vscode y hacer

    Terminal > New Terminal
    Y dentro de la consola, escribir
    npm run dev

    Los componentes son básicamente tags de html que los armamos nosotros.
    Una vez importados, se usan de la misma forma.
*/

export default function Home() {
  return (<>
  
    <PrimerComponente x={1234} />

  </>)
}
