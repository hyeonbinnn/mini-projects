import React, { useRef } from 'react';
import * as S from './Modal.style';

const Modal = ({ onClose, ...props }) => {
  const modalRef = useRef();

  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  const handleButtonClick = (buttonName) => {
    const buttonLinks = {
      Instagram: 'https://www.instagram.com/',
      YouTube: 'https://www.youtube.com/',
      Twitter: 'https://twitter.com/',
      FaceBook: 'https://ko-kr.facebook.com/',
      Velog: 'https://velog.io/',
      GitHub: 'https://github.com/',
    };

    const link = buttonLinks[buttonName];
    if (link) {
      window.open(link, '_blank');
    }
  };

  const renderButtons = () => {
    if (props.buttonName === 'blueButton') {
      return (
        <>
          <S.BlueButton1 onClick={() => handleButtonClick('GitHub')}>GitHub Go!</S.BlueButton1>
          <S.BlueButton2 onClick={() => handleButtonClick('Velog')}>Blog Go!</S.BlueButton2>
        </>
      );
    } else if (props.buttonName === 'pinkButton') {
      return (
        <>
          <S.PinkButton1 onClick={() => handleButtonClick('Instagram')}>Instagram</S.PinkButton1>
          <S.PinkButton2 onClick={() => handleButtonClick('YouTube')}>YouTube</S.PinkButton2>
          <S.PinkButton3 onClick={() => handleButtonClick('Twitter')}>Twitter</S.PinkButton3>
          <S.PinkButton4 onClick={() => handleButtonClick('FaceBook')}>FaceBook</S.PinkButton4>
        </>
      );
    }
  };
  return (
    <S.ModalBg ref={modalRef} onClick={clickOutside}>
      <S.Card className={props.className} name={props.name} buttonName={props.buttonName}>
        <h3>{props.value}</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus, dolorem odio
          quo velit tempore sequi magni sed dignissimos, excepturi libero quos cupiditate
          praesentium, temporibus ipsum sit minus voluptas voluptatibus?
        </p>
        <div>{renderButtons()}</div>
      </S.Card>
    </S.ModalBg>
  );
};

export default Modal;
