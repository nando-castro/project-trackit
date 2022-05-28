import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

function Main() {

    return (
        <Menu>
            <Header />
            <h2>Meus Hábitos</h2>
            <p>Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!</p>
            <Footer />
        </Menu>
    );
}

const Menu = styled.div`
    background: #F2F2F2;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h2 {
        position: absolute;
        left: 17px;
        top: 98px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
        
        color: #126BA5;
    }

    p {
        position: absolute;
        position: absolute;
        width: 338px;
        height: 74px;
        left: 17px;
        top: 155px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

`;

export default Main;