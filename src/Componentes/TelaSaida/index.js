import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TelaSaida () {

    const tokenLS = localStorage.getItem("token");
    const usuarioLS = localStorage.getItem("usuario");

    const servidor = "http://localhost:5000/saida";

    const config = {
        headers: {
            "Authorization": `Bearer ${tokenLS}`
        }
    }
    const [valorSaida, setValorSaida] = useState("");
    const [descriçãoSaida, setDescriçãoSaida] = useState("");

    const navigate = useNavigate();

    function salvarSaida (event) {
        event.preventDefault();
        const promise = axios.post(servidor,{
            usuario: usuarioLS,
            valor: valorSaida,
            descricao: descriçãoSaida,
            status: "saida"
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
            <Title>Nova Saida</Title>
            <form onSubmit={salvarSaida}>
            <Inputs>
                <Input type="text" placeholder="Valor" 
                    onChange={(e) => setValorSaida(e.target.value)} value={valorSaida}>
                </Input>
                <Input type="text" placeholder="Descrição" 
                    onChange={(e) => setDescriçãoSaida(e.target.value)} value={descriçãoSaida}>
                </Input>
                <Button type="submit">Salvar saída</Button>
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
export default TelaSaida;