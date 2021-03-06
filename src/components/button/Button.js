import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Button({ text, type, destiny, action, loading }) {

    return (
        <Link to={destiny} >
            <Container disabled={loading} type={type} onClick={action}>
                <span>{text}</span>
            </ Container>
        </Link>
    )
}

const Container = styled.button`
    text-align: center;
    border: none;
`;