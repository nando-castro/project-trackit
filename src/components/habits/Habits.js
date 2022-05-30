import styled from "styled-components";
import Header from "../Header";
import Menu from "../Menu";
import Title from "../Title";
import styled from 'styled-components';

export default function Habits() {
    return (
        <Container>
            <Header />
            <Title text={'Histórico'} />
            <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            <Menu />
        </Container>
    )
}

const Container = styled.div`
min-height: 100vh;
padding: 70px 0;
background: #E5E5E5;
`;