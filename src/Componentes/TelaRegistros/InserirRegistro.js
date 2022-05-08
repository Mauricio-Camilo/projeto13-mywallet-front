import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";

function InserirRegistro(props) {
    const {data, descricao, valor, status} = props;

    // const { saldo, setSaldo } = useContext(UserContext);

    // setSaldo(saldo+valor);
    // console.log(saldo);

    return (
        <UserData>
            <div>
                <Date>{data}</Date>
                <Description>{descricao}</Description>
            </div>
            <Registro status={status}>{valor}</Registro>
        </UserData>
    )
}

function corRegistro (status) {
    if (status === "entrada") return "var(--cor-entrada)";
    else return "var(--cor-saida)"
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
const Registro = styled.span`
    color: ${(props) => corRegistro(props.status)}
`
export default InserirRegistro;