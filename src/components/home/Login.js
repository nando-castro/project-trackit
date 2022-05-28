import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../../assets/img/logo.png';



function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleLogin() {

        const body = {
            email: email,
            password: password,
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);

        promise
            .then(res => {
                console.log(res.data);
                navigate("/habitos")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Home>
            <img src={logo} alt="TrackIt" />
            <Form>
                <input type="text" placeholder='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='senha' required value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form>
            <div className="button" onClick={handleLogin}>Entrar</div>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Home>
    );
}

const Home = styled.div`
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

    .button {
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
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default Login;