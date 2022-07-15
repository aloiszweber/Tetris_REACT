import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => {
    return (
        <StyledStartButton onclick={callback}> START GAME </StyledStartButton>
    )
}

export default StartButton;