import styled from 'styled-components';
import icon from '../../assets/img/logo.png';

function Header() {
    return (
        <Heade>
            <h1>TrackIt</h1>
            <img src={icon} alt="icon" />
        </Heade>
    );
}

const Heade = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1 {
        width: 97px;
        height: 49px;
        margin-left: 18px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img {
        position: absolute;
        right: 0;
        margin-right: 10px; 
        width: 51px;
        height: 51px;
        background: #000;
        border-radius: 98.5px;
    }
`

export default Header;