import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaAlimentos from "./pages/ListaAlimentos";
import DetallePage from "./pages/DetallePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaAlimentos />} />
        <Route path="/detalle/:nombre" element={<DetallePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
