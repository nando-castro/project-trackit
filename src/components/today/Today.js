import styled from "styled-components";
import Header from "../header/Header";
import Menu from "../menu/Menu";
import Title from "../title/Title";
import Task from "../task/Task";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import Menssage from "../loading/Message";
import Loader from "react-loader-spinner";

export default function Today() {

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const { user, setProgress } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [subtitle, setSubtitle] = useState('Nenhum Hábito concluido ainda!');
    const [numberFinishedTasks, setNumberFinishedTasks] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (user) {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
                { headers: { 'Authorization': `Bearer ${user.token}` } }
            );
            promise.then(response => {
                const numberHabits = response.data.length;
                let finishedTasks = 0;
                setTasks(response.data);
                setLoading(false);

                response.data.forEach(task => {
                    task.done && finishedTasks++;
                })

                if (finishedTasks !== 0) {
                    let percentage = (finishedTasks / numberHabits) * 100;
                    setSubtitle(`${percentage.toFixed(0)}% dos hábitos concluídos!`);
                    setProgress(percentage);
                    setNumberFinishedTasks(finishedTasks);
                };
            })
        }
    }, [user, setProgress]);

    return (
        <Container>
            <Header />
            <Title text={`${daysOfWeek[dayjs().day()]}, ${dayjs().format('DD/MM')}`} description={subtitle} finishedTasks={numberFinishedTasks} />

            {tasks.length === 0 && (
                <Menssage text={"Você não tem nenhum hábito cadastrado para hoje ainda. Click em 'Hábitos' e crie um novo para começar! :)"} />
            )}

            {loading && (
                <LoaderConatiner>
                    <span>Carregando ...</span>
                    <Loader type='ThreeDots' color={'#52B6FF'} />
                </LoaderConatiner>
            )}

            <Tasks>
                {tasks.length !== 0 && (
                    tasks.map(task => (<Task key={task.id} task={task} />))
                )}
            </Tasks>

            <Menu />
        </ Container>
    )
}

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 75px 0px;
    background: #E5E5E5;
`

const Tasks = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const LoaderConatiner = styled.div`
width: 100vw;
height: 300px;
color: #52B6FF;
font-size: 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`