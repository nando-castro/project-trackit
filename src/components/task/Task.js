import styled from 'styled-components';
import axios from 'axios';
import { CheckmarkOutline } from 'react-ionicons';
import { useAuth } from '../../Providers/auth';
import { Texts, Container, Checkbox, CurrentSequence, HighestSequence } from './style';

export default function Task({ task }) {

    const { user } = useAuth();

    function clickCheckbox(id) {
        task.done ? noFinishTask(id) : finishTask(id);
    }

    function noFinishTask(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {},
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        );
        promise.then(() => window.location.reload());
    }

    function finishTask(id) {
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {},
            { headers: { 'Authorization': `Bearer ${user.token}` } }
        );
        promise.then(() => window.location.reload());
    }

    return (
        <Container>
            <Texts>
                <h1>{task.name}</h1>
                <span>Sequência atual: <CurrentSequence task={task}>{task.currentSequence} dias</CurrentSequence></span>
                <span>Seu recorde: <HighestSequence task={task}>{task.highestSequence} dias</HighestSequence></span>
            </Texts>
            <Checkbox task={task} onClick={() => clickCheckbox(task.id)}>
                <CheckmarkOutline
                    color="white"
                    height="100%"
                    width="100%"
                />
            </Checkbox>
        </Container>
    )
}



const Container = styled.div`
width: 90vw;
height: 94px;
padding: 20px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Texts = styled.div`
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
const Checkbox = styled.div`
width: 69px;
height: 69px;
background: #EBEBEB;
${props => props.task.done && 'background: #8FC549;'}
border: 1px solid #E7E7E7;
border-radius: 5px;
&:hover{
    cursor: pointer;
}
`

const CurrentSequence = styled.span`
${props => props.task.done && 'color: #8FC549'}
`

const HighestSequence = styled.span`
${props => (props.task.currentSequence === props.task.highestSequence && props.task.done) && 'color: #8FC549'}
`