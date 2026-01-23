export default function Home() {

  function changeHandler() {
    console.log("Cambio el estado del checkbox")
  }

  // La etiqueta anchor recibe por prop un href que tiene la direccion relativa a la nueva ruta
  return (
    <>
      <h1>Proyecto Front</h1>
      <a href="/personajes" >Anchor</a>
      <input type="checkbox" onChange={changeHandler}></input>
    </>
  );
}