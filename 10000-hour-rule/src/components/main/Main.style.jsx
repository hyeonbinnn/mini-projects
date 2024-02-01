import styled, { css } from 'styled-components';
import hand from '../../assets/hand.png';

export const Main = styled.main`
  margin-bottom: 130px;
  text-align: center;
`;

export const H2 = styled.h2``;

export const commonStyles = css`
  font-size: 24px;
  line-height: 24px;
`;

export const Form = styled.form`
  ${commonStyles}
  margin-bottom: 150px;

  input {
    max-width: 224px;
    padding: 15px 20px;
    border-radius: 10px;
    margin: 0 20px;
    font-size: 24px;
    color: #1b1f3b;
  }
`;

export const P = styled.p`
  margin-bottom: 70px;
`;

export const ButtonExc = styled.button`
  position: relative;

  &::after {
    position: absolute;
    content: '';
    right: -80px;
    bottom: -20px;
    width: 60px;
    height: 70px;
    background-image: url(${hand});
  }
`;

export const Section = styled.section`
  ${commonStyles}
  text-align: center;
`;

export const Wannabe = styled.p`
  line-height: 120px;
  color: white;

  strong {
    font-size: 70px;
    font-family: GmarketSansbold;
    vertical-align: top;
    margin: 0 10px;
  }
`;

export const ButtonGo = styled.button``;

export const ButtonShare = styled.button`
  margin-left: 20px;
  background-color: #fff;
`;
