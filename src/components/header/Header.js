import styled from 'styled-components';
import logoHeader from '../../assets/img/logoHeader.png';
import { useAuth } from '../../context/auth';

export default function Header() {

    const { user, setNavbar } = useAuth();

    return (
        user !== null && (
            <Container>
                <img src={logoHeader} alt="Logo app" />
                <div className="userImage">
                    <img src={user.image} alt="Imagem usuário" onClick={() => setNavbar(true)} />
                </div>
            </ Container>
        )
    )
}

const Container = styled.div`
    width: 100vw;
    height: 70px;
    padding: 0px 20px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    img {
        height: 40px;
    }
    .userImage {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
        }
    }
`;