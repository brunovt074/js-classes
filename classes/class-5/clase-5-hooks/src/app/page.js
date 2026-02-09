import FormularioLogin from "@/components/FormularioLogin";

export default function Home() {
  return (
    <main style={{ padding: "50px" }}>
      <h1>Bienvenidos a la Clase 5</h1>
      
      {/* Aquí llamamos al componente que creamos recién */}
      <FormularioLogin />
      
    </main>
  );
}