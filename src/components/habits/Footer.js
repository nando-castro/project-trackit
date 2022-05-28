import styled from 'styled-components';

function Footer() {
    return (
        <Baseboard>
            <h2>Hábitos</h2>
            <h2>Histórico</h2>
        </Baseboard>
    );
}

const Baseboard = styled.footer`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 36px;
    background: #FFFFFF;

    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
`
export default Footer;