import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from "../Button";
import Loader from "react-loader-spinner";
import logo from '../../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components';


export default function PageLogin({ loading, setLoading, setUserData }) {

    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });
    function login(e) {
        e.preventDefault();
        setLoading(true);
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', { ...userLogin });
        promise.then(response => {
            navigate('/hoje');
            setLoading(false);
            setUserData(response.data);
        });
        promise.catch(err => {
            setLoading(false);
            toast.error('E-mail ou senha inválidos!');
        });
    }
    function ChangeInput(e) {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
    }
    return (
        <Container>
            <img src={logo} alt="Logo App" />
            <ToastContainer position="top-right" />
            <form>
                <input type="email" placeholder="E-mail" value={userLogin.email} name="email" onChange={ChangeInput} />
                <input type="password" placeholder='Senha' value={userLogin.password} name="password" onChange={ChangeInput} />
                {loading === false ? (
                    <Button type={'submit'} text={'Entrar'} destiny={''} action={login} />
                ) : (
                    <Loader type="Rings" color="#52B6FF" height={100} width={100} />
                )}
            </form>
            <Button loading={loading} type={'button'} text={'Não tem uma conta? cadastre-se!'} destiny={'/cadastro'} />
        </ Container>
    )
}

const Container = styled.div`
    height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 20px;
    display: flex;
    flex-direction: column;
    form {
        width: 100%;
        align-items: center;
        gap: 6px;
        display: flex;
        flex-direction: column;
        button {
            background-color: #52B6FF;
            color: #FFFFFF;
            font-size: 20.976px;
            line-height: 26px;
            text-decoration-line: none;
            &:hover {
                cursor: pointer;
            }
        }
        a { 
            width: 90%;
        }
    }
    button, input {
        min-width: 90%;
        height: 40px;
        border-radius: 5px;
    }
    button {
        width: 100%;
        background-color: #ffffff;
        color: #52B6FF;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration-line: underline;
        span { 
            &:hover{
                cursor: pointer;
            }
        }
    }
`;