import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';


function TelaCadastro() {

    const loading = <ThreeDots color="#FFFFFF" />;

    // Estados para guardar infos do usuário
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");

    // Estado usado para colocar a animação no login e ativar a mudança
    const [cadastrar, setCadastrar] = useState("Cadastrar");
    // const [selecionado, setSelecionado] = useState(false)

    const servidor = "http://localhost:5000/cadastro";

    const navigate = useNavigate();

    function cadastrarUsuario (event) {
        event.preventDefault();
        setCadastrar(loading);
        console.log("fui clicado");
        const promise = axios.post(servidor,{
            nome,
            email,
            senha,
            senha2,
        });
        promise.then(response => {
            navigate("/");
        })
        promise.catch(response => {
            console.log("A requisição deu ruim");
            zerarInputs();
            
        })
    };

    function zerarInputs () {
        setCadastrar("Cadastrar")
        setNome("");
        setEmail("");
        setSenha("");
        setSenha2("");
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <form onSubmit={cadastrarUsuario}>
                <Inputs>
                    <Input type="text" placeholder="Nome" required
                        onChange={(e) => setNome(e.target.value)} value={nome}>
                    </Input>
                    <Input type="text" placeholder="E-mail" 
                        onChange={(e) => setEmail(e.target.value)} value={email}>
                    </Input>
                    <Input type="password" placeholder="Senha" 
                        onChange={(e) => setSenha(e.target.value)} value={senha}>
                    </Input>
                    <Input type="password" placeholder="Confirme a senha" 
                        onChange={(e) => setSenha2(e.target.value)} value={senha2}>
                    </Input>
                    <SignUp type="submit">
                        {cadastrar}</SignUp>
                </Inputs>
            </form>
            <Hiperlink onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</Hiperlink>

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
    margin-top: 95px;
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
const SignUp = styled.button`
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
export default TelaCadastro;