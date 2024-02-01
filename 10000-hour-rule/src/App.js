import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
${normalize}

@font-face {
    font-family: 'MICEGothic Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

* {
  font-family: 'MICEGothic Bold', sans-serif;
}

h2 {
  margin: 0px;
}

body {
  background-color:#1b1f3b;
}

p {
  color: white;
}

button {
  color: #1b1f3b;
  background-color: #9ea2e3;
  padding: 15px;
  border-radius: 10px;
  border: none;
}

.a11y-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
`;

const App = () => {
  const [modalShow, setModalShow] = useState(false);

  const modalClose = () => {
    setModalShow(false);
  };

  const modalOpen = () => {
    setModalShow(true);
  };
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main modalOpen={modalOpen} />
      {modalShow && <Modal modalClose={modalClose} />}
    </>
  );
};
export default App;
