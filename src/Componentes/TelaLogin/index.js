import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';

function TelaLogin() {

    const { setToken } = useContext(UserContext);

    const loading = <ThreeDots color="#FFFFFF" />;

    const servidor = "http://localhost:5000/"

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const [entrar, setEntrar] = useState("Entrar");

    function fazerLogin (event) {
        event.preventDefault();
        setEntrar(loading);
        const promise = axios.post(servidor, {
            login,
            senha
        });
        promise.then(response => {
            const {data} = response;
            console.log(data);
            setToken(data.token);
            localStorage.setItem("token", data.token);
            // navigate("/registros");

        })
        promise.catch(error => {
            console.log("A requisição deu ruim");
            zerarInputs();
        })
    }

    function zerarInputs () {
        setEntrar("Entrar")
        setLogin("");
        setSenha("");
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <form onSubmit={fazerLogin}>
                <Inputs>
                    <Input type="text" placeholder="E-mail" required
                        onChange={(e) => setLogin(e.target.value)} value={login}>
                    </Input>
                    <Input type="password" placeholder="Senha" required
                        onChange={(e) => setSenha(e.target.value)} value={senha}>
                    </Input>
                    <Login type="submit">{entrar}</Login>
                </Inputs>
            </form>
            <Hiperlink onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</Hiperlink>
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
`

const Title = styled.h1`
    font-family: 'Saira Stencil One', cursive; 
    font-size: 32px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 159px;
    margin-bottom: 24px;
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

const Login = styled.button`
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-botao);
`
const Hiperlink = styled.p`
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    margin-top: 36px;
`

export default TelaLogin;
