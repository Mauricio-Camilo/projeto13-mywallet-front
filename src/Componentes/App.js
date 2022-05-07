import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaRegistros from "./TelaRegistros";
import TelaEntrada from "./TelaEntrada";
import TelaSaida from "./TelaSaida";

function App() {

    // TESTAR SALVAR O USUARIO NO LOCAL STORAGE SEM CRIAR UM ESTADO AQUI

    const [token, setToken] = useState("");

    const context = { token, setToken };

    return (
        <>
            <UserContext.Provider value={context}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<TelaLogin />} />
                        <Route path="/cadastro" element={<TelaCadastro />} />
                        <Route path="/registros" element={<TelaRegistros />} />
                        <Route path="/entrada" element={<TelaEntrada />} />
                        <Route path="/saida" element={<TelaSaida />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
}

export default App;