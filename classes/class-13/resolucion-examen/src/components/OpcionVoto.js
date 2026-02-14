export default function OpcionVoto({ nombre, votos, porcentaje }) {
  // Recibimos props: nombre, votos, porcentaje [cite: 208]

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      {/* 1. Mostrar Nombre y Porcentaje [cite: 210-211] */}
      <h3>{nombre} ({porcentaje}%)</h3>
      
      {/* Barra de progreso visual (Opcional, pero queda bien) */}
      <div style={{ background: "#eee", height: "10px", width: "100%" }}>
        <div style={{ background: "blue", height: "10px", width: `${porcentaje}%` }}></div>
      </div>

      {/* 2. LOGICA CONDICIONAL COMPLEJA */}
      
      {/* "Si votos es 0, mostrar 'Sin votos'" [cite: 212] */}
      {votos === 0 && <p style={{color: "gray"}}>Sin votos</p>}

      {/* "Si porcentaje > 50: mostrar GANADORA" [cite: 213] */}
      {porcentaje > 50 && <h2 style={{color: "green"}}>🏆 GANADORA</h2>}
    </div>
  );
}