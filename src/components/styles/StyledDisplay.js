import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 2vw 0;
    padding: 1vw 0 1vw 15px;
    border: 4px solid #333;
    min-height: 40px;
    width: 80%;
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    text-transform: uppercase;
`