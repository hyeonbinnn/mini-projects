# ⏳ 1만 시간의 법칙
![image](https://github.com/hyeonbinnn/react-mini-projects/assets/117449788/35e03ab5-8fab-454d-b1cc-92b1da406ea3)

<br>
<br>
<br>

## 🔉 핵심 기능
1. 사용자로부터 전문가가 되기 위한 정보 입력받기
2. 해당 정보를 바탕으로 일 수 계산해 결과 보여주기
3. 훈련하러 가는 모달창 띄우기

<br>
<br>
<br>

## 🔉 핵심 코드 설명
### uesState 3가지 상태 변수 정의하기
```js
const Main = (props) => {
  const [expert, setExpert] = useState('');
  const [traningTime, setTraningTime] = useState('');
  const [dDay, setDday] = useState(0);
```
- <strong>`expert`</strong> 전문가의 종류를 나타내는 문자열 상태 변수이다.
- <strong>`traningTime`</strong> 하루에 훈련할 시간을 나타내는 숫자 상태 변수이다.
- <strong>`dDay`</strong> 전문가가 되기 위해 필요한 남은 일 수를 나타내는 숫자 상태 변수이다.

<br>

### 폼 제출 이벤트 처리하기
```js
const handleSubmit = (event) => {
  event.preventDefault();
  setDday(Math.ceil(10000 / traningTime));
  };
```
- 사용자가 폼을 제출하면 <strong>`traningTime`</strong>을 기반으로 <strong>`dDay`</strong>를 계산한다. 
- 이 결과를 상태 변수 <strong>`dDay`</strong>에 저장한다.

<br>

### 값이 0이 아니면 결과 보여주기
```js
return (
  ...
  
   {!!dDay && (
     <S.Section>
     <h3 className="a11y-hidden">결과 확인</h3>
     <S.Wannabe>
     당신은 <strong>{expert}</strong> 전문가가 되기 위해서
  <br />
     대략 <strong>{dDay}</strong> 이상 훈련하셔야 합니다! :&#41;
  </S.Wannabe>
  <S.ButtonGo type="button" className="btn-go" onClick={props.modalOpen}>
    훈련하러가기 GO!
      </S.ButtonGo>
  <S.ButtonShare type="button" className="btn-share">
    공유하기
  </S.ButtonShare>
  </S.Section>
  )}
</S.Main>
  );
};
```
- <strong>`onClick`</strong>을 통해 전달받은 <strong>`props.modalOpen`</strong> 함수를 호출하여 훈련을 응원하는 페이지로 이동한다. 

<br>

### useState 훅으로 모달 상태 변수 정의
```js
const App = () => {
  const [modalShow, setModalShow] = useState(false);

  const modalClose = () => {
    setModalShow(false);
  };

  const modalOpen = () => {
    setModalShow(true);
  };
```
- <strong>`modalShow`</strong> 상태 변수로 모달 창이 열려있는지 닫혀있는지 관리한다.

- <strong>`modalClose`</strong> 함수와 <strong>`modalOpen`</strong> 함수는 각각 모달창을 닫거나 열 수 있도록 <strong>`modalShow`</strong> 상태를 변경한다.

<br>

### 모달 렌더링하기
```js
return (
  <>
  <GlobalStyle />
  <Header />
  <Main modalOpen={modalOpen} />
{modalShow && <Modal modalClose={modalClose} />}
  </>
 );
};
```
- <strong>`modalOpen`</strong> 함수를 메인 컴포넌트에 전달해 버튼 클릭 시 모달 창을 열 수 있도록 한다.
- <strong>`modalShow`</strong>가 true일 때만 모달 컴포넌트 렌더링한다.
- <strong>`modalClose`</strong> 함수를 모달 컴포넌트로 전달해 모달창을 닫을 수 있게 한다.

<br>
<br>
<br>

## 🔉 최종 결과물
![](https://velog.velcdn.com/images/hyeonbinnn/post/e269c75e-e72d-432b-97f8-bea150d88818/image.gif)

