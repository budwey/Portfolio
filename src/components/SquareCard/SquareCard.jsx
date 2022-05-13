import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.05rem;
    height: 100%;
    width: 100%;
    color: #000000;
    justify-content: center;
    background-color: white;
    border-radius: 1.5rem;
    -webkit-box-shadow: 0px 20px 27px -14px #54545432; 
    box-shadow: 0px 20px 27px -14px #54545432;
    z-index: 0;
    font-size: 100%;
    border-top: 1px solid #54545430;
    cursor: pointer;
    transition: all 0.5s ease;
    user-select: none;

    &:hover{
        font-size: 130%;
        -webkit-box-shadow: 0px 20px 27px -14px #54545489; 
        box-shadow: 0px 20px 27px -14px #54545489;
    }
`;

const WrapperTop = styled.div`
    background-color: ${props => props.backgroundColor || '#d4e8ff'};
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem 1.5rem 0 0;
    -webkit-box-shadow: 0px 20px 27px -14px #54545410; 
    box-shadow: 0px 20px 27px -14px #2c2c2c10;
    z-index: 1;
`;

const WrapperBottom = styled.div`
    background-color: #ffffff;
    flex:5;
    border-radius: 0 0 1.5rem 1.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Spinner = styled.div`
    border: 4px solid #00000063;
    border-left-color: transparent;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    animation: spin 1.5s linear infinite;

    @keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;

const Title = styled.div`
    margin: 1.5rem;
    color: #525252;
    font-weight: 600;
    font-size: 100%;
    width: fit-content;
    background-color: ${props => props.backgroundColor || '#d4e8ff'};
    height: fit-content;
    padding: 0.1rem 1.5rem;
    border-radius: 1.5rem;
    filter: brightness(0.8) saturate(1.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Description = styled.div`
    color: #525252;
    font-weight: 600;
    font-family: 'Noto Sans';
    font-stretch: condensed;
    font-size: 0.8rem;
    margin-top: 0.5rem;
`;

const SquareCard = (props) => {
    const {title, description, backgroundColor, className} = props;

    return(
        <Wrapper className={className}>
            <WrapperTop backgroundColor={backgroundColor}>
                <Title backgroundColor={backgroundColor}>{title}</Title>
            </WrapperTop>
            <WrapperBottom>
                <Spinner/>
                <Description>{description}</Description>
            </WrapperBottom>
        </Wrapper>
    )
}

SquareCard.defaultProps = {
    title: 'Título',
    description: 'Próximamente'
}
export default SquareCard;