import styled from 'styled-components';

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  overflow: hidden;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  box-shadow: 5px 5px gray;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: ${(props) => (props.className === 'blueModal' ? '500px' : '700px')};
  background-color: ${(props) => (props.name === 'small' ? '#eaf0fd' : '#fdebf7')};
`;

export const Button = styled.button`
  width: 90px;
  height: 28px;
  border-radius: 5px;
  font-weight: bold;
  margin: 10px auto;
  &:hover {
    background-color: ${'transparent'};
  }
  &:active {
    background-color: ${'#d0cdd6'};
  }
`;

export const BlueButton1 = styled(Button)`
  background-color: #ffffff;
  margin-right: 20px;
`;

export const BlueButton2 = styled(Button)`
  background-color: #ffffff;
`;

export const PinkButton1 = styled(Button)`
  background-color: #f1cbe5;
  margin-right: 20px;
`;
export const PinkButton2 = styled(Button)`
  background-color: #c5d7fe;
  margin-right: 20px;
`;
export const PinkButton3 = styled(Button)`
  background-color: #adddc5;
  margin-right: 20px;
`;
export const PinkButton4 = styled(Button)`
  background-color: #d5cdfb;
`;
