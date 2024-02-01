import styled from 'styled-components';

export const Modal = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalWrap = styled.div`
  display: inline-block;
  width: 700px;
  min-width: 500px;
  padding: 70px 50px;
  background-color: #fff;
  border-radius: 20px;
  color: #1b1f3b;
  text-align: center;

  h2 {
    font-size: 50px;
  }

  h3 {
    font-size: 25px;
  }

  img {
    display: block;
    width: 100%
    max-width: 340px;
    margin: 0 auto 30px;
  }

  button {
    font-size: 23px;
  }
`;
