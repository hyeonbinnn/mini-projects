const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.user-choice');
const winner = document.querySelector('.result');

const result = ['가위', '바위', '보'];

const show = (user, computer, result) => {
  computerChoice.innerHTML = computer;
  userChoice.innerHTML = user;
  winner.innerHTML = result;
};

const game = (user, computer) => {
  let message;
  if (user === computer) {
    message = '무승부';
  } else {
    switch (user + computer) {
      // 가위보, 바위가위, 보바위
      case '가위보':
      case '바위가위':
      case '보바위':
        message = '사용자 승리!';
        break;

      // 가위바위, 바위보, 보가위
      case '가위바위':
      case '바위보':
      case '보가위':
        message = '컴퓨터 승리!';
        break;
    }
  }
  show(user, computer, message);
};

const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
});
