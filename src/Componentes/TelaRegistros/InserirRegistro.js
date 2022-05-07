import styled from "styled-components";

function InserirRegistro(props) {
    const {data, descrição, valor} = props;
    return (
        <UserData>
            <div>
                <Date>{data}</Date>
                <Description>{descrição}</Description>
            </div>
            <Valor>{valor}</Valor>
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
const Valor = styled.span`
    color: var(--cor-entrada);
`
export default InserirRegistro;