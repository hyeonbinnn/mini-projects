import React, { useState } from 'react';
import * as S from './Main.style';

const Main = (props) => {
  const [expert, setExpert] = useState('');
  const [traningTime, setTraningTime] = useState('');
  const [dDay, setDday] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDday(Math.ceil(10000 / traningTime));
  };

  return (
    <S.Main>
      <S.H2 className="a11y-hidden">필요한 시간 알아보기</S.H2>
      <S.Form onSubmit={handleSubmit}>
        <S.P>
          나는
          <input
            type="text"
            required
            value={expert}
            onChange={(event) => setExpert(event.target.value)}
          />
          전문가가 될 것이다.
        </S.P>
        <S.P>
          그래서 앞으로 매일 하루에
          <input
            type="number"
            required
            value={traningTime}
            onChange={(event) => setTraningTime(event.target.value)}
          />
          시간씩 훈련할 것이다.
        </S.P>
        <S.ButtonExc type="submit"> 나는 며칠동안 훈련을 해야 1만시간이 될까?</S.ButtonExc>
      </S.Form>

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

export default Main;
