export default function FormularioComentario({
  onChangeTexto,
  onChangeCategoria,
  onClickPublicar,
  textoActual,
}) {
  return (
    <div>
      <h3>Publicar Comentario</h3>

      <textarea
        placeholder="Escriba su comentario"
        onChange={onChangeTexto}
        value={textoActual}
      />

      <p>{textoActual.length}/200</p>

      <select onChange={onChangeCategoria}>
        <option value="">Seleccione categoría</option>
        <option value="Info">Info</option>
        <option value="Pregunta">Pregunta</option>
        <option value="Respuesta">Respuesta</option>
      </select>

      <button onClick={onClickPublicar}>Publicar</button>
    </div>
  );
}