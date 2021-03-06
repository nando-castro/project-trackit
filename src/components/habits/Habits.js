import styled from "styled-components";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Title from "../title/Title";
import Habit from "../habits/Habit";
import BuilddHabit from "../habits/BuildHabit";
import { AddOutline } from 'react-ionicons';
import { useEffect, useState } from "react";
import Menssage from "../loading/Message";
import axios from "axios";
import { useAuth } from "../../context/auth";

export default function Habits() {

    const [creatingHabit, setCreatingHabit] = useState(false);
    const [message, setMessage] = useState(true);
    const [habits, setHabits] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user !== null) {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
                { headers: { 'Authorization': `Bearer ${user.token}` } }
            );
            promise.then(response => {
                setHabits(response.data);
                response.data.length > 0 && setMessage(false);
            })
        }
    }, [user])

    function showBuildHabit() {
        setCreatingHabit(true);
    }

    return (
        <Container>
            <Header />
            <Top>
                <Title text={"Meus hábitos"} />
                <CreateHabit onClick={showBuildHabit}>
                    <AddOutline
                        color='#fff'
                        width="25px"
                    />
                </CreateHabit>
            </Top>

            {creatingHabit && <BuilddHabit setCreatingHabit={setCreatingHabit} />}
            {(message && habits.length === 0) && <Menssage text={"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"} />}
            {(habits && !creatingHabit) && (
                habits.map((habit) => {
                    return <Habit key={habit.id} habit={habit} />
                })
            )}

            <Menu />
        </Container>
    )
}

const Container = styled.div`
min-height: 100vh;
padding: 70px 0;
background-color: #e5e5e5;
`;

const Top = styled.div`
padding-right: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const CreateHabit = styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    cursor: pointer;
}
`;