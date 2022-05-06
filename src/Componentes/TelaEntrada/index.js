import styled from "styled-components";

function TelaEntrada () {
    return (
        <Container>
            <Title>Nova Entrada</Title>
            <Input>
                <input type="text" placeholder="Valor">
                </input>
                <input type="text" placeholder="Descrição">
                </input>
                <Login >Salvar entrada</Login>
            </Input>
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
const Input = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding-left: 25px;

    input {
        width: 326px;
        height: 58px;
        border-radius: 5px;
        padding-left: 15px;
    }
`
const Login = styled.button`
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    background-color: var(--cor-botao);
`
export default TelaEntrada;