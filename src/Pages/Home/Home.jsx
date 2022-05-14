import React from "react";
import styled from 'styled-components';
import './Home.css';
import {Helmet} from 'react-helmet';

import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Avatar from '../../components/Avatar/Avatar';
import avatarImg from '../../assets/img/avatar/avatarAridane.png';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import SquareCard from '../../components/SquareCard/SquareCard';

const Home = () => {

const AvatarWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  left: 50%;
  transform: translate(-50%,-40%);
  background-color: transparent;
  z-index: 1;
`;

const CardWrapper = styled.div`
  display: flex;
  position: absolute;
  transform: translateY(100%);
  justify-content: center;
  border-top: 1px solid rgba(0,0,0, 0.05);
  border-radius: 2.5rem 2.5rem 0 0;
`;

const WrapperMain = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  height: 55vh;
  min-height: 650px;
  transform: translateY(-3.5%);
  border-radius: 2rem 2rem 0 0;
  z-index: 0;
  border-left: 1px solid rgba(118,138,161, 0.25);
  border-right: 1px solid rgba(118,138,161, 0.25);
`;

const WrapperSquareCard = styled.div`
  background: white;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  transform: translateY(-30%);
  margin: 0 4rem;
  margin-bottom: -5vh;
  height: 28vh;
  min-height: 320px;
`;

const SquareCardLeft = styled(SquareCard)`
      border-left: 1px solid #54545420;
`;

const SquareCardRight = styled(SquareCard)`
      border-right: 1px solid #54545420;
`;

    return ( <>
        <Helmet>
          <title>Portfolio - Jose Aridane</title>
        </Helmet>
        <Header/>
        <Slider/>
        <AvatarWrapper>
            <Avatar avatarImg={avatarImg}/>
        </AvatarWrapper>
        <WrapperMain>
            <CardWrapper>
                <Card/>
            </CardWrapper>
            <WrapperSquareCard>
                <SquareCardLeft backgroundColor='#faedcba0' title='Proyecto 1'/>
                <SquareCard backgroundColor='#c9e4dea0' title='Proyecto 2'/>
                <SquareCardRight backgroundColor='#f9c6c9a0' title='Proyecto 3'/>
            </WrapperSquareCard>
        </WrapperMain>
        <Footer/>
        </>
    );
}

export default Home;