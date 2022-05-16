import React from "react";
import styled from 'styled-components';
import './Home.css';
import {Helmet} from 'react-helmet';
import sizes from '../../components/mediaQuery';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import Avatar from '../../components/Avatar/Avatar';
import avatarImg from '../../assets/img/avatar/avatarAridane.png';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import SquareCard from '../../components/SquareCard/SquareCard';
import DesktopStyles from './DesktopStyles';

const {AvatarWrapper, WrapperMain, CardWrapper, WrapperSquareCard, SquareCardLeft, SquareCardRight} = DesktopStyles;
const {Desktop, Mobile} = sizes;

const Home = () => {

    return (<>
      <Desktop>
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
      </Desktop>

      <Mobile>
        esto es un movil
      </Mobile>
    </>);
}

export default Home;