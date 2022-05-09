import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaRegistros from "./TelaRegistros";
import TelaEntrada from "./TelaEntrada";
import TelaSaida from "./TelaSaida";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/registros" element={<TelaRegistros />} />
                    <Route path="/entrada" element={<TelaEntrada />} />
                    <Route path="/saida" element={<TelaSaida />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;