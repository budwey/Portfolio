import React from "react";
import styled from 'styled-components';

const Wrapper = styled.a`
    background-color: ${props => props.backgroundColor || 'transparent'};
    font-size: ${props => props.size || '1rem'};
    color: ${props => props.color || 'black'};
    font-weight: ${props => props.fontWeight || 'regular'};
    cursor: pointer;
    border-radius: 1rem;
    padding: 0.1rem 0.5rem;
    text-shadow: 1px 3px 2px rgba(0,0,0,0.05);
    transition: 0.2s;

    &:hover{
        text-shadow: 1px 3px 2px rgba(0,0,0,0.25);
    }
`;

const Button = (props) => {
    const {backgroundColor, color, size, fontWeight, value, className} = props;

    return (
        <Wrapper backgroundColor={backgroundColor} size={size} color={color} fontWeight={fontWeight} className={className}>{value}</Wrapper>
    )
}

export default Button;