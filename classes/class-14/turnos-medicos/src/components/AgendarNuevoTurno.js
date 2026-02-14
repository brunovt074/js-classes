export default function AgendarNuevoTurno({
  onChangeNumeroTurno,
  onClickRealizarReservaDeTurno,
}) {
  return (
    <div style={{ marginTop: 20 }}>
      {" "}
      Agendar nuevo turno
      <input type="number" onChange={onChangeNumeroTurno} />
      <button onClick={onClickRealizarReservaDeTurno}>Reservar Turno</button>
    </div>
  );
}
