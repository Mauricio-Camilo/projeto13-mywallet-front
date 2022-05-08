import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import InserirRegistro from "./InserirRegistro";

function TelaRegistros() {
    const tokenLS = localStorage.getItem("token");
    const usuarioLS = localStorage.getItem("usuario");

    const [registros, setRegistros] = useState([]);
    const [saldo, setSaldo] = useState(0);

    let soma = 0;

    const servidor = "http://localhost:5000/registros";

    const config = {
        headers: {
            "Authorization": `Bearer ${tokenLS}`
        }
    }

    useEffect(() => {
        const promise = axios.get(servidor, config);
        promise.then(response => {
            const { data } = response;
            setRegistros(data);
            calcularTotal();
            console.log("Retorno do get", data);
        });
        promise.catch(err => console.log(err.response.statusText));
    }, []);

    function calcularTotal() {
        registros.forEach(registro => {
            let { valor, status } = registro;
            valor = parseFloat(valor);
            if (status === "entrada") soma += valor;
            else soma -= valor;
        })
        setSaldo(soma)
    }

    const navigate = useNavigate();
    return (
        <>
            <Header>
                <Title>Olá,{usuarioLS}</Title>
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
                {registros.map(registro => {
                    const { data, descricao, valor, status } = registro;
                    return (
                        <InserirRegistro key={data} data={data}
                            descricao={descricao} valor={valor} status={status} />
                    )
                })}
                <Saldo>
                    <p>SALDO</p>
                    {saldo > 0?
                    <Positivo>{saldo}</Positivo>:
                    <Negativo>{saldo}</Negativo>
                    }
                </Saldo>
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
    min-height: 446px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-top: 26px;
    margin-left: 25px;
    padding-bottom: 20px;
    position: relative;
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

const Saldo = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 0 10px;
    margin-top: 200px;

        p {
            font-size: 17px;
            font-weight: 700;
            color: var(--cor-descrição);
            
        }
`
// MUDAR ESSA LÓGICA DEPOIS
const Positivo = styled.span`
    font-size: 17px;
    font-weight: 400;
    color: var(--cor-entrada);
`

const Negativo = styled.span`
    font-size: 17px;
    font-weight: 400;
    color: var(--cor-saida);
`

export default TelaRegistros;