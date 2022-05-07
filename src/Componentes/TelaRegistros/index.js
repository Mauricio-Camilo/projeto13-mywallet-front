import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import InserirRegistro from "./InserirRegistro";

function TelaRegistros() {
    const tokenLS = localStorage.getItem("token");
    console.log("Token na pagina de registro: ", tokenLS);

    // RECEBER OS DADOS VINDO DO BACKEND NO LUGAR
    const dadosTeste = [
        {data: "30/11", descrição: "almoço", valor: "39.90"},
        {data: "29/11", descrição: "jantar", valor: "49.90"},
        {data: "28/11", descrição: "compras", valor: "59.90"},
        {data: "27/11", descrição: "emprestimo", valor: "29.90"},
    ]

    const navigate = useNavigate();
    return (
        <>
            <Header>
                <Title>Olá, Fulano</Title>
                <IconTop>
                    <ion-icon name="log-out-outline"></ion-icon>
                </IconTop>
            </Header>
            {/* <Container>
                    <Message>
                        Não há registros de <br></br>entrada ou saida
                    </Message>
            </Container> */}
            <Container2>
                {dadosTeste.map(dado => {
                    const {data, descrição, valor} = dado;
                    return (
                        <InserirRegistro key={data} data={data} 
                        descrição={descrição}  valor={valor}/>
                    )
                })}
            </Container2>
            <Footer>
                <SubContainer>
                    <IconFooter onClick={() => navigate("/entrada")}>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </IconFooter>
                    <p>Nova <br></br>entrada</p>
                </SubContainer>
                <SubContainer>
                    <IconFooter onClick={() => navigate("/saida")}>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                    </IconFooter>
                    <p>Nova <br></br>saida</p>
                </SubContainer>
            </Footer>
        </>
    )
}
const UserData = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    padding-top: 26px;

`

const Date = styled.span`
    color: var(--cor-data);
`
const Description = styled.span`
    color: var(--cor-descrição);
    margin-left: 5px;
`
const Valor = styled.span`
    color: var(--cor-entrada);
`


const Header = styled.div`
    display: flex;
    align-itens: center;
`

const Title = styled.h2`
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    margin-left: 24px;
    margin-top: 25px;
`

const IconTop = styled.button`
    font-size: 23px;
    color: white;
    background-color: var(--cor-fundo);
    border: 1px solid var(--cor-fundo);
    margin-top: 25px;
    margin-left: 160px;
`
const Container = styled.div`
    width: 326px;
    height: 446px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 26px;
    margin-left: 25px;
`

const Container2 = styled.div`
    width: 326px;
    height: 446px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-top: 26px;
    margin-left: 25px;
`


const Message = styled.div`
    font-size: 20px;
    color: var(--cor-message);
    text-align: center;
`
const Footer = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 13px;
    margin-bottom: 16px;
    margin-left: 25px;

`
const SubContainer = styled.div`
    width: 155px;
    height: 114px;
    background-color: var(--cor-botao);
        p {
            font-size: 17px;
            font-weight: 700;
            color: #FFFFFF;
            margin-top: 25px;
            margin-left: 10px;
        }
`
const IconFooter = styled.button`
    font-size: 23px;
    font-weight: bold;
    color: white;
    background-color: var(--cor-botao);
    border: 1px solid var(--cor-botao);
    margin-top: 10px;
`

export default TelaRegistros;