import ListaProductos from "@/components/ListaProductos";

export default function Home() {
  return (
    <main style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h1>Sistema de Gestión</h1>
      
      {/* Llamamos al componente que hace el Fetch */}
      <ListaProductos />
      
    </main>
  );
}