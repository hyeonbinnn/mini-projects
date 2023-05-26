const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
  const now = new Date();

  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}

// setInterval() 함수 : 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
// 첫번째 인자로 실행할 코드, 두번째 인자로 반복 주기를 밀리초 단위로 받음
setInterval(clock, 1000);
