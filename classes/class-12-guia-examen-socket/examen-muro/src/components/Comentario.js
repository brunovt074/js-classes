export default function Comentario({ usuario, texto, categoria, timestamp }) {
  const hora = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const categoriaTexto =
    categoria === "Info" 
      ? "ℹ️ Información ℹ️"
      : categoria === "Pregunta"
      ? "❓ Pregunta ❓"
      : "✅ Respuesta ✅";

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <strong>{usuario}</strong> -- {categoriaTexto}
      <p>{texto}</p>
      <small>{hora}</small>
    </div>
  );
}