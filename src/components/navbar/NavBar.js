import styled from 'styled-components';
import logo from '../../assets/img/logo.png';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();
    const { user, setNavbar } = useAuth();

    function exitApp() {
        setNavbar(false);
        navigate('/');
        localStorage.clear();
        window.location.reload();
    }

    return (
        <Container>
            <Content>
                <Top>
                    <img src={logo} alt={'Logo do app'} />
                    {user && <Text>Obrigado pela <br /> preferência, {user.name}! :)</Text>}
                </Top>
                <Footer>
                    {user && <img src={user.image} alt={'Imagem do usuário logado'} />}
                    <Exit onClick={exitApp} >Sair</Exit>
                </Footer>
            </Content>
            <Background onClick={() => setNavbar(false)} />
        </Container>
    )
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
position: fixed;
top: 0;
left: 0;
z-index: 20;
`;

const Content = styled.div`
width: 65vw;
height: 100vh;
padding: 30px 8px;
background: #fff;
box-shadow: 0 0 1em #666666;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
img{
    width: 60%;
}
`;

const Background = styled.div`
width: 35vw;
height: 100vh;
background: #666666;
opacity: 0.5;
`;

const Exit = styled.button`
width: 90px;
height: 40px;
background: #52B6FF;
border-radius: 5px;
color: #fff;
font-size: 23px;
&:hover{
    cursor: pointer;
}
`;

const Text = styled.span`
`;

const Footer = styled.div`
display: flex;
gap: 30px;
flex-direction: column;
align-items: center;
img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 0.5em #666666;
}
`;

const Top = styled.div`
color: #666666;
line-height: 1.15;
display: flex;
gap: 20px;
flex-direction: column;
align-items: center;
text-align: center;
`;