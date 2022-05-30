import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../../context/auth';
import WeekDay from '../week/WeekDay';
import LoaderSave from "../loading/LoaderSave";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function BuildHabit({ setCreatingHabit }) {

    const [daysSelected, setDaysSelected] = useState([]);
    const [loading, setLoading] = useState(false);
    const [habit, setHabit] = useState('');
    const { user } = useAuth();
    const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const daysOfWeekNumber = [7, 1, 2, 3, 4, 5, 6];
    let selected = false;

    function cancelBild() {
        setCreatingHabit(false);
        setDaysSelected([]);
    }

    function changeDays(day) {
        let arr = daysSelected;
        if (daysSelected.includes(day)) {
            arr.splice(daysSelected.indexOf(day), 1);
            setDaysSelected([...arr]);
        } else { setDaysSelected([...daysSelected, day]) }
    }

    function checkData() {
        if (habit === '') {
            toast.warn('Insira um hábito!');
        } else if (daysSelected.length === 0) {
            toast.warn('Selecione pelo menos um dia da semana!')
        } else { CreateHabit(); }
    }

    function CreateHabit() {
        setLoading(true);
        console.log(habit, daysSelected.sort(), user.token)
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            { name: habit, days: daysSelected.sort() },
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        )
        promise.then(response => {
            setCreatingHabit(false);
            setDaysSelected([]);
            setLoading(false);
            window.location.reload();
        })
        promise.catch(err => setLoading(false))
    }

    return (
        <Container>
            <div>
                <input disabled={loading} placeholder="Nome do hábito" type="text" onChange={e => setHabit(e.target.value)} value={habit} />

                <Days>
                    {daysOfWeek.map((day, index) => {
                        const number = daysOfWeekNumber[index];
                        daysSelected.includes(number) ? selected = true : selected = false;

                        return <WeekDay loading={loading} key={index} number={number} text={day} changeDays={changeDays} selected={selected} />
                    })}
                </Days>
            </div>

            <Botoes>
                <Cancel onClick={cancelBild} loading={loading} disabled={loading}>Cancelar</Cancel>

                <Save loading={loading} onClick={checkData} disabled={loading}>
                    {loading ? <LoaderSave /> : 'Salvar'}
                </Save>
            </Botoes>
            <ToastContainer limit={1} />
        </Container>
    )
}

const Container = styled.div`
height: 180px;
padding: 18px;
margin: 0 18px 30px;
background-color: #fff;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-between;
input{
    width: 100%;
    height: 45px;
    border-radius: 5px;
}
`;

export const Days = styled.div`
display: flex;
gap: 8px;
`;

export const Botoes = styled.div`
display: flex;
justify-content: end;
align-items: center;
gap: 20px;
`;

const Cancel = styled.div`
font-size: 15.976px;
line-height: 20px;
color: #52B6FF;
text-align: center;
${props => props.loading && 'opacity: 0.5;'}
&:hover{
    cursor: pointer;
}
`;

const Save = styled.div`
width: 84px;
height: 35px;
background: #52B6FF;
color: #fff;
border-radius: 4.63636px;
${props => props.loading && 'opacity: 0.5;'}
display: flex;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
}
`;