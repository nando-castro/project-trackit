import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';


function Habits() {

    const [habit, setHabit] = useState('');
    const [days, setDays] = useState([]);

    function createHabit() {

        console.log("clicou");

        const URL_HABIT = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";


        const body = {
            name: habit,
            days: days
        }

        const promise = axios.get(URL_HABIT, body);

        promise
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <RegisteHabit>
                <input type="text" placeholder='nome do hábito' required value={habit} onChange={(e) => setHabit(e.target.value)} />
                <li>
                    <ul>D</ul>
                    <ul>S</ul>
                    <ul>T</ul>
                    <ul>Q</ul>
                    <ul>Q</ul>
                    <ul>S</ul>
                    <ul>S</ul>
                </li>
                <div className='container'>
                    <div className='btn-cancell'>Cancelar</div>
                    <div className='button' >Salvar</div>
                </div>

            </RegisteHabit>
            <span>Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!</span>
        </>
    );

}

const RegisteHabit = styled.div`
    width: 340px;
    height: 180px;

    background: #FFFFFF;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        width: 338px;
        height: 74px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
    

    li {
        display: flex;
        justify-content: center;
    }

    ul {
        width: 30px;
        height: 30px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin: 8px 4px;
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }

    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .button {
        width: 84px;
        height: 35px;

        background: #52B6FF;
        border-radius: 5px;
        margin-left: 15px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #FFFFFF;
    }

    .btn-cancell {
        width: 69px;
        height: 20px;
        margin-right: 15px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #52B6FF;


    }


`;

export default Habits;