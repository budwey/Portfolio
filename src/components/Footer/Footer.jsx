import React from "react";
import styled from 'styled-components';
import canaryFlag from '../../assets/svg/canary.svg';

const Wrapper = styled.div`
    background-color: #353d44ea;
    display: flex;
    margin-top: -2.5rem;
    border-radius: 0 0 1.5rem 1.5rem;
    justify-content: space-around;
    color: white;
    padding-top: 2rem;
    max-width: 1200px;
    min-height: fit-content;
    padding-bottom: 2rem;
`;

    const WrapperLeft = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    `;

    const WrapperRight = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    `;

    const Title = styled.div`
        color: white;
        font-weight: 600;
        margin-bottom: 0.5rem;
        text-shadow: 1px 3px 2px #41414119;
        user-select: none;
        text-decoration: underline;
    `;

    const Description = styled.div`
        font-family: 'Sitka';
        color: white;
        font-weight: 200;
        font-stretch: condensed;
        line-height: 1.1rem;
        font-size: 0.95rem;
        user-select: none;
        margin-top: 0.5rem;
        text-align: center;
        width: 70%;
        height: fit-content;

    `;

    const DescriptionContacts = styled(Description)`
        margin: 0.5rem auto;
        margin-top: 1rem;
        display:flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        align-self: center;
        align-content: center;
        user-select: text;
    `;

        const Flag = styled.img`
            width: 12px;
            height: 12px;
            margin-left: 0.1rem;
            margin-top: 0.5rem;
            transform: translateY(1px);
        `;


const Footer = () => {

    return(
        <Wrapper>
            <WrapperLeft>
                <Title>Sobre mí</Title>
                <Description>
                    Desarrollador Web Junior, y apasionado de las tecnologías desde siempre.
                    Soy de los que piensan que si te gusta lo que haces, no se puede llamar trabajo.
                </Description>
                <Description>
                    Actualmente residiendo en Gran Canaria, Islas Canarias  <Flag src={canaryFlag} alt='Texto Alt'/>
                </Description>
            </WrapperLeft>
            <WrapperRight>
                <Title>Contáctame</Title>
                <DescriptionContacts>
                    Teléfono ✆: 689082986
                </DescriptionContacts>
                <DescriptionContacts>
                    Email ✉: josearidane@gmail.com
                </DescriptionContacts>  
            </WrapperRight>
        </Wrapper>
    )
}

export default Footer;