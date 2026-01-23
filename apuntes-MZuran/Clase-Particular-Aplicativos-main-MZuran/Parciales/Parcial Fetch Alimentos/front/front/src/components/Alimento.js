import Nombre from "./Nombre";

function Alimento({ nombre, onClick }) {
  return (
    <div>
      <Nombre texto={nombre} />
      <button onClick={onClick}>Ver detalle</button>
    </div>
  );
}

export default Alimento;
