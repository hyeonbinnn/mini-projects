import styled from 'styled-components';
import txtLeft from '../../assets/txt-left.png';
import txtRight from '../../assets/txt-right.png';

export const Header = styled.header`
  margin-bottom: 95px;
`;

export const H1 = styled.h1`
  position: relative;
  max-width: 564px;
  margin: 100px auto 0px auto;

  img {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  max-width: 486px;
  margin: 80px auto 80px auto;

  img {
    width: 100%;
  }
`;

export const P = styled.p`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  line-height: 40px;
  font-size: 23px;
  text-align: center;
  color: white;
  strong {
    font-size: 30px;
    font-weight: bold;
  }

  &::before,
  &::after {
    position: absolute;
    top: 35%;
    content: '';
    width: 37px;
    height: 32px;
    margin: -16px -20px 0px -20px;
  }

  &::before {
    left: 0;
    background-image: url(${txtLeft});
  }

  &::after {
    right: 0;
    background-image: url(${txtRight});
  }
`;
