import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TelaEntrada() {

    const tokenLS = localStorage.getItem("token");
    const usuarioLS = localStorage.getItem("usuario");

    const servidor = "http://localhost:5000/entrada";

    const config = {
        headers: {
            "Authorization": `Bearer ${tokenLS}`
        }
    }

    const [valorEntrada, setValorEntrada] = useState("");
    const [descriçãoEntrada, setDescriçãoEntrada] = useState("");

    const navigate = useNavigate();

    function salvarEntrada (event) {
        event.preventDefault();
        const promise = axios.post(servidor,{
            usuario: usuarioLS,
            valor: valorEntrada,
            descricao: descriçãoEntrada,
            status:"entrada"
        }, config)
        promise.then(response => {
            const {data} = response;
            console.log(data);
            navigate("/registros");
        });
        promise.catch(error => {
            alert("Falha no envio dos dados, por favor tente novamente");
        })
    }
    return (
        <Container>
            <Title>Nova Entrada</Title>
            <form onSubmit={salvarEntrada}>
            <Inputs>
                <Input type="text" placeholder="Valor" required
                    onChange={(e) => setValorEntrada(e.target.value)} value={valorEntrada}>
                </Input>
                <Input type="text" placeholder="Descrição" required
                    onChange={(e) => setDescriçãoEntrada(e.target.value)} value={descriçãoEntrada}>
                </Input>
                <Button type="submit">Salvar entrada</Button>
            </Inputs>
            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
`
const Title = styled.h2`
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    margin-top: 25px;
    margin-bottom: 40px;
    margin-left: 24px;
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding-left: 25px;
`
const Input = styled.input`
        width: 326px;
        height: 58px;
        border-radius: 5px;
        padding-left: 15px;
`
const Button = styled.button`
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    background-color: var(--cor-botao);
`
export default TelaEntrada;