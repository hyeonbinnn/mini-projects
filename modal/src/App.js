import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Modal from './components/Modal';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #f5f5f5;
  box-sizing: border-box;
}

h2 {
  font-size: 30px;
  text-align: center;
  margin-top: 50px
}

h3 {
  font-size: 25px;
  margin-bottom: 40px;
}

p {
  margin: 20px;
}
`;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (modalClassName) => {
    setIsModalOpen(true);
    setSelectedModal(modalClassName);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h2>Welcome to my Profile!</h2>
        <Section>
          <Button onClick={() => openModal('blueModal')} title="blue">
            Project
          </Button>
          <Button onClick={() => openModal('pinkModal')} title="pink">
            Social Media
          </Button>
        </Section>
        {isModalOpen && selectedModal === 'blueModal' && (
          <Modal
            className="blueModal"
            value="Project"
            name="small"
            buttonName="blueButton"
            onClose={closeModal}
          />
        )}
        {isModalOpen && selectedModal === 'pinkModal' && (
          <Modal
            className="pinkModal"
            value="Social Media"
            name="middle"
            buttonName="pinkButton"
            onClose={closeModal}
          />
        )}
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  box-shadow: 5px 5px gray;
  position: relative;
  margin: 290px auto;
  background-color: #ffffff;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  margin: 70px auto;
  gap: 30px;
`;

const Button = styled.button`
  width: 150px;
  height: 70px;
  background-color: ${(props) => (props.title === 'blue' ? '#eaf0fd' : '#fdebf7')};
  border-radius: 20px;
  border: 3px dotted gray;
  font-size: 18px;
  font-weight: bold;
`;
