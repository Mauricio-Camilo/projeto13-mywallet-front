import styled from "styled-components";

function TelaLogin() {
    return (
        <Container>
            <Title>MyWallet</Title>
            <Input>
                <input type="text" placeholder="E-mail">
                </input>
                <input type="text" placeholder="Senha">
                </input>
                <Login >Entrar</Login>
            </Input>
            <Hiperlink>Primeira vez? Cadastre-se!</Hiperlink>

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
const Hiperlink = styled.p`
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    margin-top: 36px;
`


export default TelaLogin;