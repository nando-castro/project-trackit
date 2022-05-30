import axios from 'axios';
import { CheckmarkOutline } from 'react-ionicons';
import { useAuth } from '../../Providers/auth';
import { Texts, Container, Checkbox } from './style';

export default function Task({ task }) {

    const { user } = useAuth();

    function finishTask(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/{id}/check`,
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        );
        promise.then(() => window.location.reload());
    }

    console.log(task);

    return (
        <Container>
            <Texts>
                <h1>{task.name}</h1>
                <span>Sequência atual: {task.currentSequence} dias</span>
                <span>Seu recorde: {task.highestSequence} dias</span>
            </Texts>
            <Checkbox onClick={() => finishTask(task.id)}>
                <CheckmarkOutline
                    color="white"
                    height="100%"
                    width="100%"
                />
            </Checkbox>
        </Container>
    )
}



export const Container = styled.div`
width: 90vw;
height: 94px;
padding: 5%;
background: #FFFFFF;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Texts = styled.div`
width: 70%;
height: 100%;
color: #666666;
display: flex;
flex-direction: column;
justify-content: center;
gap: 7px;
h1 {
    font-size: 19.976px;
    line-height: 25px;
}
span { 
    font-size: 12.976px;
    line-height: 16px;
}
`
export const Checkbox = styled.div`
width: 69px;
height: 69px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
` 