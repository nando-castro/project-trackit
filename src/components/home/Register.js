import styled from 'styled-components';
import logo from '../../assets/img/logo.png';

function Register() {
    return (
        <Registe>
            <img src={logo} alt="TrackIt" />
            <input placeholder='email' />
            <input placeholder='senha' />
            <input placeholder='nome' />
            <input placeholder='foto' />
            <div>Cadastrar</div>
            <p>Já tem uma conta? Faça login!</p>
        </Registe>
    );
}

const Registe = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #FFFFFF;

    img {
        width: 180px;
        height: 178.38px;
        margin-bottom: 32px;
    }

    input {
        width: 80%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        /* identical to box height */
        color: #DBDBDB;
    }

    div {
        width: 80%;
        heigth: 45px;
        padding: 10px;
        background: #52B6FF;
        border-radius: 4px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;
        margin-bottom: 25px;
    }

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`

export default Register;