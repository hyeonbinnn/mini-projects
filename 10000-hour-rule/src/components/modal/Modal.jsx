import React from 'react';
import * as S from './Modal.style';
import turtle from '../../assets/turtle.png';

const Modal = (props) => {
  return (
    <S.Modal>
      <S.ModalWrap>
        <h2>화이팅!!♥♥♥</h2>
        <h3>당신의 꿈을 응원합니다!</h3>
        <img src={turtle} alt="응원하는 꼬북이" />
        <button type="button" onClick={props.modalClose}>
          종료하고 진짜 훈련하러가기 GO!
        </button>
      </S.ModalWrap>
    </S.Modal>
  );
};

export default Modal;
