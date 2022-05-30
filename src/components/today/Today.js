import Header from "../Header";
import Menu from "../Menu";
import Title from "../Title";
import Task from "../Task";
import { Container, Tasks } from "./style";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useAuth } from "../../Providers/auth";
import axios from "axios";


export default function PageToday() {

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const { user } = useAuth();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (user) {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
                { headers: { 'Authorization': `Bearer ${user.token}` } }
            );
            promise.then(response => {
                setTasks(response.data);
            })
        }
    }, [user])

    return (
        <Container>
            <Header />
            <Title text={`${daysOfWeek[dayjs().day()]}, ${dayjs().format('DD/MM')}`} description={'Nenhum Hábito concluido ainda'} />
            <Tasks>
                {tasks.length !== 0 && (
                    tasks.map(task => <Task key={task.id} task={task} />)
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
`;