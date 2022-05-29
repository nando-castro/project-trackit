import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Habits from './Habits';

function Main({ token }) {

    console.log(token);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL_HABITS = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const promise = axios.get(URL_HABITS, config);

        promise
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    })

    function click() {
        
    }



    return (
        <>
            <Header />
            <Menu>
                <h2>Meus Hábitos</h2>
                <ion-icon name="add-outline" onCLick={click} ></ion-icon>
            </Menu>
            <Habits />
            <Footer />
        </>
    );
}

const Menu = styled.div`
    width: 100%;
    height: 70px;
    margin-top: 80px;
    padding: 15px;
    background: #F2F2F2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
        
        color: #126BA5;
    }

    ion-icon {

        width: 40px;
        height: 35px;

        color: #FFFFFF;
        font-size: 26px;
        background: #52B6FF;
        border-radius: 4px;
    }

`;

export default Main;