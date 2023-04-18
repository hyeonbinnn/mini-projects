## 1. 기념일 계산기

### 우리 사귄지 며칠째?
```bash
만난 밀리초 = 오늘.getTime() - 사귄날.getTime()
만난 일 = 만난 밀리초를 일로 환산
```  
<br>

- 데이터 객체 생성 (사귄 시점을 기준으로 데이터 생성)
```javascript
let now = new Date();
let start = new Date("2020.5.28");
```
<br>

- 두 시간의 차이를 구하면 사귄날부터 오늘까지의 기간이 밀리초로 나옴
```javascript
let now = new Date();
let start = new Date("2020.5.28");

let timeDiff = now.getTime() - start.getTime();
```
<br>

- 밀리초를 만난 날로 바꾸기
- 사귄날을 1일이라고 하니까 +1 더하기
```javascript
// 입력
let now = new Date();
let start = new Date("2020.5.28");

let timeDiff = now.getTime() - start.getTime();
let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
console.log(day)

// 출력
1057.1159904166666
```
<br>

- 소숫점 날리고 정수로 바꿔주기
```javascript
// 입력
let now = new Date();
let start = new Date("2020.5.28");

let timeDiff = now.getTime() - start.getTime();
let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
console.log(day);

// 출력
1057
```
<br>

- 며칠째 넣어주기
```javascript
let now = new Date();
let start = new Date("2020.5.28");

let timeDiff = now.getTime() - start.getTime();
let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(day + "일째");
```
<br>

## 2. 기념일 계산기

## 3. 기념일 계산기

## 4. 기념일 계산기
