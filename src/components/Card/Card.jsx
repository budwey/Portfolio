import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    backdrop-filter: blur(100px);
    background-color: white;
    width: 100%;
    height: 100%;
    padding: 1rem;
    padding-bottom: 0.5rem;
    border-radius: 1.5rem;
    outline: 1px solid #b4b4b41f;
    -webkit-box-shadow: 0px 7px 4px -4px #54545409; 
    box-shadow: 0px 8px 1px 1px #54545410;
    user-select: none;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    font-weight: 600;
    font-stretch: semi-condensed;
    color: #222222e2;
    font-size: 1.1rem;
`;

const Description = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 1.5rem;
    text-align: justify;
    font-weight: 500;
    font-stretch: semi-condensed;
    color: #181818e4;
    font-size: 0.85rem;
    border-radius: 1.5rem;
    line-height: 1.4rem;
`;

const Card = () => {

    return (
        <Wrapper>
            <Title>Jose Aridane Hdez Báez</Title>
            <Description> · Full-Stack Junior Web Developer 💻 
            </Description>
        </Wrapper>
    )
}

export default Card;