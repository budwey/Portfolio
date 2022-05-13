import React from "react";
import styled from 'styled-components';
import Link from "../../components/Link/Link";
import Button from '../../components/Button/Button';

import githubIcon from '../../assets/svg/github.svg';
import linkedinIcon from '../../assets/svg/linkedin.svg';
import facebookIcon from '../../assets/svg/facebook.svg';

const WrapperMain = styled.div`
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(50px);
    position: relative;
    width: 100vw;
    height: 4rem;
    border-radius: 1.5rem 1.5rem 0 0;
    display: flex;
    justify-content: space-between;
    min-width: 650px;
    max-width: 1200px;
    -webkit-box-shadow: 0px 4px 4px -2px #000000; 
    box-shadow: 0px 5px 12px -10px #00000061;
    user-select: none;
`;

    const ButtonTitle = styled(Button)`
        font-family: 'Franklin Gothic';
        font-size: 25px;
    `;

    const WrapperLeft = styled.div`
        display: flex;
        margin-left: 2.5rem;
        justify-content: left;
        align-items: center;
        align-self: center;
        flex: 1;
    `;

    const WrapperRight = styled.div`
        display: flex;
        margin-right: 2.5rem;
        justify-content: right;
        align-self: center;
        flex: 1;
    `;

    const Symbol = styled.span`
        font-family: 'Roboto';
        font-size: xx-large;
        font-weight: 600;
        color: gray;
        display: flex;
        animation: blinker 1s linear infinite;

        @keyframes blinker {
        50% {
            opacity: 0;
        }
}
    `;

const Header = () => {

    return ( 
        <>
            <WrapperMain>
                <WrapperLeft>
                    <ButtonTitle value='<Portfolio />' size='1.5rem' fontWeight='600' color='rgba(75, 75, 75, 0.9)'/>
                    <Symbol>|</Symbol>
                </WrapperLeft>
                <WrapperRight>
                    <Link iconImg={githubIcon} />
                    <Link iconImg={linkedinIcon} />
                    <Link iconImg={facebookIcon} />
                </WrapperRight>
            </WrapperMain>
        </>
    )
};

export default Header;