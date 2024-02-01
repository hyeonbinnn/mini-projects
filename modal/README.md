# 📃 모달창 만들기
<p align="center">
  <img src="https://github.com/hyeonbinnn/react-mini-projects/assets/117449788/0ad00e0e-fe8d-406b-908c-141c28aad911"
</p>

<br>
<br>
<br>

## 📍 핵심 To Do List
1. <strong>`useState`</strong> 훅으로 모달 열림 / 닫힘 상태 관리
2. <strong>`useRef`</strong> 훅으로 모달 바깥 영역 클릭 시 닫히는 모달 ref 생성

<br>
<br>
<br>

## 📍 App 컴포넌트
### 모달창 노출시키는 컴포넌트

```jsx
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
```
<br>

<strong>useState 훅을 사용해 상태를 관리</strong>

- `isModalOpen` 모달이 열려있는지 나타내는 상태
- `selectModal` 선택된 모달`(modalClassName)`의 종류를 저장하는 상태

=> `openModal` 함수는 모달을 열 때 호출되고, 선택한 모달의 종류를 `selectModal`에 저장하고, `isModalOpen`을 `true`로 설정해 모달을 보여준다!

=> `closeModal` 함수는 모달을 닫을 때 호출되고, `isModalOpen`을 `false`로 설정해 모달을 감춘다!
<br>
<br>

```jsx
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
```
<br>

<strong>Modal 컴포넌트 렌더링</strong>

- `<Button>` 스타일드 컴포넌트는 `title prop`에 따라 배경색이 달라지고, `onClick` 함수에 의해 선택된 모달`(modalClassName)`을 열기위한 버튼이다.
- `isModalOpen`과 `selectModal`의 값을 검사해 해당 `className prop`의 모달이 열려잇을 때만 Modal 컴포넌트를 렌더링한다.
- Modal 컴포넌트에는 `className, value, name, buttonName, onClose` 등의 `prop`을 전달해 모달의 내용과 동작을 설정한다.
<br>

![](https://velog.velcdn.com/images/hyeonbinnn/post/649c3b94-b959-4549-b3cc-3cb837cee478/image.png)

<br>
<br>
<br>


## 📍 Modal 컴포넌트
### 모달 정보가 담겨있는 컴포넌트
```jsx
const Modal = ({ onClose, ...props }) => {
  const modalRef = useRef();

  const clickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };
```
<br>

<strong>useRef 훅을 사용해 모달창 ref 생성</strong>

- `clickOutside` 함수는 모달 바깥 영역을 클릭할 때 모달을 닫는 동작을 수행한다.
- `modalRef`와 클릭 이벤트의 `target`을 비교해 모달 바깥 영역이 클릭된 경우 `onClose` 함수를 호출해 모달을 닫는다.
<br>
<br>

```jsx
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
```
<br>

<strong>handleButtonClick 함수</strong>

- 모달 내의 버튼을 클릭할 때 실행되고, 버튼에 따라 다른 링크를 새 탭에서 오픈한다.
- 원래는 `switch`문을 통해 코드를 작성했지만, `buttonLinks` 객체를 사용하여 버튼 이름과 링크를 매핑한다.
- `buttonName`을 매개변수로 받아 `buttonLinks` 객체에서 해당 버튼에 맞는 링크를 찾아 새 탭으로 오픈한다.
<br>
<br>

```jsx
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
```
<br>

<strong>renderButtons 함수</strong>

- 선택된 모달에 따라 다른 버튼을 렌더링한다.
- `props.buttonName`을 확인해 `blueButton`이면 그에 해당하는 버튼을, `pinkButton`이면 그에 해당하는 버튼을 렌더링한다.
- 버튼을 클릭하면 `handleButtonClick` 함수가 호출되고, 함수에는 해당 버튼의 내용(문자열)이 인자로 전달한다.
<br>
<br>

```jsx
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
```
<br>

<strong>모달 구성</strong>

- `<S.ModalBg>`는 모달 배경을 의미하고, `ref`와 `onClick` 이벤트를 설정해 모달 바깥 영역을 클릭할 때 `clickOutSide` 함수를 호출한다.
- `S.Card`는 실제 모달 내용을 담고있고, `props.className, props.size, props.buttonName`을 사용해 클래스 이름, 크기, 버튼 종류를 설정한다.
- `<div>` 태그에 `renderButtons()` 함수를 호출해 버튼을 렌더링한다.
<br>
<br>
<br>

![](https://velog.velcdn.com/images/hyeonbinnn/post/fc89d32b-765c-48b8-8563-55addb2ee2e2/image.png)![](https://velog.velcdn.com/images/hyeonbinnn/post/d93b1248-7ff9-47fc-ace1-a483ea7f9109/image.png)

<br>

