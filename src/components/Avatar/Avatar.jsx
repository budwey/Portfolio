import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    background: url(${props => props.avatarImg});
    background-position: center;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.13);
    outline: 3px solid rgba(255, 255, 255, 0.9);
    -webkit-box-shadow: 0px 0px 50px -10px #00000088; 
    box-shadow: 0px 0px 50px -10px #44444478;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
        transform: scale(1.1);
    }
`;

const Avatar = (props) => {
    const {avatarImg} = props;

    return (
        <Wrapper avatarImg={avatarImg}/>
    )
}

export default Avatar;