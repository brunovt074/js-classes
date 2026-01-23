import Nombre from "./Nombre";

function DetalleAlimento({ nombre, stock, precio }) {
  return (
    <div>
      <Nombre texto={nombre} />
      <p>Stock: {stock}</p>
      <p>Precio: ${precio}</p>
    </div>
  );
}

export default DetalleAlimento;
