import MessageBox from "@/components/MessageBox";

// MessageBox espera recibir los siguientes 3 props:
// usuario mensaje timeStamp

/*
    Vamos a tomar la lista de mensajes y la vamos a MAPEAR
    para que obtengamos una nueva lista de <MessageBox/>

    Estos <MessageBox/> van a recibir por prop la información que contienen los
    elementos
*/

const mensajes = [
  {
    id: 1,
    usuario: "Carlos",
    mensaje: "Hola, ¿cómo estás?",
    timeStamp: "2025-11-11T10:15:00Z"
  },
  {
    id: 2,
    usuario: "María",
    mensaje: "Todo bien, ¿y tú?",
    timeStamp: "2025-11-11T10:16:20Z"
  },
  {
    id: 3,
    usuario: "Carlos",
    mensaje: "Muy bien, gracias por preguntar 😊",
    timeStamp: "2025-11-11T10:17:10Z"
  },
  {
    id: 4,
    usuario: "Luis",
    mensaje: "¡Hola a todos!",
    timeStamp: "2025-11-11T10:18:45Z"
  }
];

export default function Home() {

  return (
    <div>
      <h1>Home</h1>
      {
        mensajes.map(
          elementoObjeto =>
            <MessageBox
              usuario={elementoObjeto.usuario}
              mensaje={elementoObjeto.mensaje}
              timeStamp={elementoObjeto.timeStamp}
              key={elementoObjeto.id}
            />
        )
      }
    </div>
  );
}
