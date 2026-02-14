export default function Turno({
  especialidad,
  turnoActual,
  pacienteActual,
  cantidadReservas,
}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 20 }}>
      {" "}
      Especialidad: {especialidad} Turno actual: {turnoActual} Paciente:{" "}
      {pacienteActual} Reservas realizadas: {cantidadReservas}{" "}
    </div>
  );
}
