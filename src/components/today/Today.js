import styled from "styled-components";

import Header from "../Header";
import Menu from "../Menu";
import Title from "../Title";
import Task from "../Task";



export default function PageToday() {
    return (
        <Container>
            <Header />
            <Title text={"Segunda-feira, 17/05"} description={'Nenhum Hábito concluido ainda'} />
            <Tasks>
                <Task />
                <Task />
                <Task />
                <Task />
            </Tasks>
            <Menu />
        </ Container>
    )
}

const Container = styled.div`
    width: 100vw;
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