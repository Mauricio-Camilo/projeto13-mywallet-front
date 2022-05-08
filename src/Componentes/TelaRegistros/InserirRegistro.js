import styled from "styled-components";

function InserirRegistro(props) {
    const {data, descricao, valor, status} = props;
    return (
        <UserData>
            <div>
                <Date>{data}</Date>
                <Description>{descricao}</Description>
            </div>
            {status === "entrada" ?
            <Entrada>{valor}</Entrada> :
            <Saida>{valor}</Saida> }
        </UserData>
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
const Entrada = styled.span`
    color: var(--cor-entrada);
`
const Saida = styled.span`
    color: var(--cor-saida);
`
export default InserirRegistro;