import OpcionVoto from "./OpcionVoto";

export default function ResultadosVotacion({ opciones }) {
  // Props: opciones (es un Array de objetos) [cite: 216]

  return (
    <div>
      {/* Título requerido [cite: 218] */}
      <h2>Resultados en tiempo real</h2>

      {/* --- EL MOMENTO CLAVE: .MAP() --- 
          "Usar .map() para iterar sobre las opciones" [cite: 219]
      */}
      {opciones.map((opcion) => (
        <OpcionVoto 
           key={opcion.id}          // SIEMPRE que usamos map, necesitamos una key única
           nombre={opcion.nombre}   // Pasamos datos al hijo
           votos={opcion.votos}
           porcentaje={opcion.porcentaje}
        />
      ))}
    </div>
  );
}