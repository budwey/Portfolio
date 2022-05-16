import styled from 'styled-components';
import SquareCard from '../../components/SquareCard/SquareCard';

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

export default {AvatarWrapper, WrapperMain, CardWrapper, WrapperSquareCard, SquareCardLeft, SquareCardRight};