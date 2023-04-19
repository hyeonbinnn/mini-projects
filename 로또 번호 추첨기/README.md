## 1. 로또 번호 추첨기
<p align="center">
  <img src="https://user-images.githubusercontent.com/117449788/232545940-fbb0fa42-f340-4db8-b3d6-6cf18d8fb821.png">
</p>
<br>

### 공 1개부터 뽑아보자
- 자바스크립트에서 임의의 숫자를 만드는 방법 `Math.randon();`  
=> 0이상 ~ 1미만 실수(float)  
```javascript
// 입력
let num = Math.random();
document.write(num);

// 출력(누를 때마다 바뀜)
0.5551057775278314
```
<br>

- 1부터 45까지 숫자 만들기 `Math.randon() * 45;`   
=> 0이상 ~ 45미만 실수(float)
<br>

- 0제외하고 45는 포함하기 `Math.randon() * 45 + 1;`   
=> 1이상 ~ 46미만 실수(float) 
<br>

- 실수(float)를 정수(int)로 바꿔주기 `parseInt(Math.randon() * 45 + 1);`  
=> 1이상 ~ 45이하 정수(int)    


```javascript
// 입력
let num = Math.random() * 45 + 1;
let ball1 = parseInt(num);
document.write(ball1);

// 출력(누를 때마다 바뀜)
15
```
<br>

## 2. 로또 번호 추첨기 
### 공 6개 뽑아보자
- 배열(Array) 사용하면 하나의 변수 안에 여러 개의 값들을 넣을 수 있음
```javascript
let lotto = [1,2,3,4,5,6];

// 값을 꺼낼 때
변수이름[위치번호(인덱스)] = lotto[0]
```
<br>

- 3가져오기
```javascript
// 입력
let lotto = [1, 2, 3, 4, 5, 6];
document.write(lotto[2]);

// 출력
3
```
<br>

- 마지막 값 추가하기 `.push()`
```javascript
// 입력
let lotto = [1, 2, 3, 4, 5, 6];
lotto.push(7);
document.write(lotto);

// 출력
1,2,3,4,5,6,7
```
<br>

- 임의의 숫자 6개를 담은 배열 만들기
```javascript
// 입력
let lotto = [];
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
document.write(lotto);

// 출력(누를 때마다 바뀜)
5,41,1,35,5,33
```
<br>

## 3. 로또 번호 추첨기 
### DRY = Don't Repeat Yourself
### <for문>
보통 특정 횟수만큼 어떤 코드를 동작시킬 때 사용
### <while문>
특정 조건까지 계속 반복하는 코드를 작성할때 사용  
<br>

- 반복문(for) 이용하기
```javascript
// 시작 - 반복문에서 언제까지 반복할지를 결정하는 변수 설정
// 끝 - 언제까지 반복할 건지 조건을 설정
// 증가 - 반복하려는 코드가 실행된 다음 실행된 코드 입력되고 조건이 깨지면 끝남
for (시작; 끝; 증가) {
  반복하려는 코드
}
for (let i=0; i < 6; i++) {
  반복하려는 코드
}
```
<br>

- 반복문(for) 이용해서 임의의 숫자 6개 뽑기
```javascript
// 입력
let lotto = [];
for (let i = 0; i < 6; i++) {
  lotto.push(parseInt(Math.random() * 45 + 1));
}
document.write(lotto);

// 출력(누를 때마다 바뀜)
37,21,20,30,33,3
```
<br>

## 4. 로또 번호 추첨기 
- 조건문(if) 이용해서 중복되는 값 처리하기  
  → 만약 중복이 아니라면 `.push`, 그게 아니면 넘어가는 조건 추가  
```javascript
if (조건) {
  참일 경우
}
```
<br>

- 값이 있으면 위치, 없으면 -1 `.indexOf(값)`  
  → if와 .indexOf를 이용해서 특정숫자가 없을 때 즉, -1에만 안쪽 코드가 실행
  → 배열 안에 값이 없을 때만 .push 해주기  
```javascript
// 입력
let lotto = [];
for (let i = 0; i < 6; i++) {
    let num = parseInt(Math.random() * 45 + 1);
    if (lotto.indexOf(num) == -1) {
        lotto.push(num);
    }
}
document.write(lotto);

// 출력(중복되는 숫자 제외하고 누를 때마다 바뀜)
14,31,22,12,26,3
```
<br>

## 5. 로또 번호 추첨기
❎ 문제 발생 : 만약 중복된 값이 있었다면, 총 6번 뽑는 것 중에 한 번이 안 들어갈 경우가 생겨, `let lotto = [1,2,3,4,5]` 5개 번호만 들어갈 경우도 생김  

✅ 해결 방법 : 공을 6번만 뽑는 게 아니라 공이 6개가 될 때까지 반복하기  
<br>

- 반복문(while) 이용해서 공이 6개가 될 때까지 반복하기
```javascript
while (조건) {
  반복하려는 코드
}
```
<br>

- 배열의 길이 `.length`를 이용해 배열의 값이 6개를 넘어가면 반복문을 종료하는 조건 추가
```javascript
// 입력
let lotto = [];
while (lotto.length < 6) {
      let num = parseInt(Math.random() * 45 + 1);
      if (lotto.indexOf(num) == -1) {
          lotto.push(num);
      }
}
document.write(lotto);

// 출력(중복없이, 항상 6개의 값이 나옴)
16,13,17,10,40,15
```
<br>

## 6. 로또 번호 추첨기 
- 뒤죽박죽 번호 순서 정렬하기  
  → 배열 값 정렬 `.sort()`
```javascript
// 입력
let lotto = [1, 2, 3, 44, 55, 6666, 333, 222];
lotto.sort();
document.write(lotto);

// 출력
1,2,222,3,333,44,55,6666
```
<br>

- 숫자 오름차순 정렬하기  
  → `.sort((a, b) => a - b)`
```javascript
// 입력
let lotto = [1, 2, 3, 44, 55, 6666, 333, 222];
lotto.sort((a, b) => a - b);
document.write(lotto);

// 출력
1,2,3,44,55,222,333,6666
```
<br>

- 숫자 내림차순 정렬하기  
  → `.sort((a, b) => b - a)`
```javascript
// 입력
let lotto = [1, 2, 3, 44, 55, 6666, 333, 222];
lotto.sort((a, b) => b - a);
document.write(lotto);

// 출력
6666,333,222,55,44,3,2,1
```
<br>

- 로또 번호 순서 오름차순 정렬하기  
```javascript
// 입력
let lotto = [];
while (lotto.length < 6) {
      let num = parseInt(Math.random() * 45 + 1);
      if (lotto.indexOf(num) == -1) {
          lotto.push(num);
      }
}
lotto.sort((a, b) => a - b);
document.write(lotto);

// 출력
4,7,14,25,26,42
```
<br>

## 7. 로또 번호 추첨기 
- HTML/CSS 붙이기  
```javascript
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");
```
```css
h1 {
  margin-left: 70px;
}

.ball {
  float: left;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  font-weight: 500;
  text-shadow: 0px 0px 3px rgba(73, 57, 0, 0.8);
  margin-right: 6px;
}

.ball1 {
  background: #fbc400;
}
.ball2 {
  background: #69c8f2;
}
.ball3 {
  background: #ff7272;
}
.ball4 {
  background: #aaa;
}
.ball5 {
  background: #b0d840;
}
.ball6 {
  background: #c7c7c7;
}

