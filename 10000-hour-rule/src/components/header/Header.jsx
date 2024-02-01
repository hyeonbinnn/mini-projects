import React from 'react';
import title from '../../assets/title.png';
import txt_subtitle from '../../assets/txt_subtitle.png';
import * as S from './Header.style';

const Header = () => {
  return (
    <S.Header>
      <S.H1>
        <img src={title} alt="1만 시간의 법칙" />
      </S.H1>
      <S.H2>
        <img src={txt_subtitle} alt="할 수 있다고 믿는 사람은 결국 그렇게 된다" />
      </S.H2>
      <S.P>
        <strong>1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다!
      </S.P>
    </S.Header>
  );
};

export default Header;
