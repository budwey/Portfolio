import React from "react";
import styled from 'styled-components';

const Wrapper = styled.a`
    max-width: 28px;
    max-height: 28px;
    margin: 0 0.5rem;
    cursor: pointer;
`;

const Icon = styled.img`
    src: ${props => props.src};
    width: 28px;
    height: 28px;
    transition: 0.15s;


    &:hover{
        transform: scale(1.05);
        opacity: 0.5;
    }
`;

const Link = (props) => {
    const {iconImg} = props;

    return(
        <Wrapper><Icon src={iconImg} alt='Texto Alt'/></Wrapper>
    )
}

export default Link;