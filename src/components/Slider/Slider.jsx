import React from "react";
import styled from 'styled-components';
import sliderImg from '../../assets/img/slider/slider1.png';

const Wrapper = styled.div`
    width: 100%;
    margin-top: -3.9rem;
    min-height: 20rem;
    border-radius: 1.5rem 1.5rem 0 0;
    background: url(${props => props.sliderImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 500px;
    max-width: 1200px;
`;

const Slider = () => {

    return (
        <Wrapper sliderImg={sliderImg}/>
    )
}

export default Slider;