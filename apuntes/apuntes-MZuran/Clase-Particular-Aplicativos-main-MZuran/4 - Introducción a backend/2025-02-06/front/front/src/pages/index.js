/*
  SweetAlert2

  Si nosotros queremos usar un paquete de react, debemos:
  1) Buscar el paquete en internet
  2) Descargar el paquete mediante Node Package Manager (npm)
  3) Fijarse en la documentacion del paquete cómo utilizarlo
  4) Importarlo en el proyecto
*/

// queremos usar el objeto Swal que descargamos desde el paquete de sweetalert
import Swal from "sweetalert2";

export default function Home() {

  function alertNormalHandler() {
    alert("Este es un alert normal")
  }

  function alertaSweetHandler() {
    Swal.fire({
      title: "Este es un alert personalizado!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

  return (
    <>
      <h1>Frontend de la aplicacion</h1>
      <p>Vamos a instalar un paquete para que la funcion alert() sea mas estetica y personalizable</p>
      <p>Para solucionar este problema tenemos dos opciones:</p>
      <p>1) Desarrollar un nuevo sistema de alert() para que nosotros utilicemos</p>
      <p>2) Podemos descargar un paquete ya armado para que no tengamos que hacer un nuevo sistema</p>


      <button onClick={alertNormalHandler} >Alert normal</button>

      <button onClick={alertaSweetHandler} >Alert con sweetAlert</button>
    </>

  );
}
