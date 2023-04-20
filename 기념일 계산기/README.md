## 1. 기념일 계산기

<p align="center">
  <img src="https://user-images.githubusercontent.com/117449788/233092131-8df94493-4aba-4e8c-9d07-4e5b54b52fac.png">
</p>

### 우리 사귄지 며칠째?

```bash
만난 밀리초 = 오늘.getTime() - 사귄날.getTime()
만난 일 = 만난 밀리초를 일로 환산
```

<br>

- 데이터 객체 생성 (사귄 시점을 기준으로 데이터 생성)

```javascript
const now = new Date();
const start = new Date("2020.5.28");
```

<br>

- 두 시간의 차이를 구하면 사귄날부터 오늘까지의 기간이 밀리초로 나옴

```javascript
const now = new Date();
const start = new Date("2020.5.28");

const timeDiff = now.getTime() - start.getTime();
```

<br>

- 밀리초를 만난 날로 바꾸기
- 사귄날을 1일이라고 하니까 +1 더하기

```javascript
// 입력
const now = new Date();
const start = new Date("2020.5.28");

const timeDiff = now.getTime() - start.getTime();
const day = timeDiff / (1000 * 60 * 60 * 24) + 1;
console.log(day);

// 출력
1057.1159904166666;
```

<br>

- 소수점 날리고 정수로 바꿔주기

```javascript
// 입력
const now = new Date();
const start = new Date("2020.5.28");

const timeDiff = now.getTime() - start.getTime();
const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
console.log(day);

// 출력
1057;
```

<br>

- html 값으로 `며칠째` 넣어주기

```javascript
const now = new Date();
const start = new Date("2020.5.28");

const timeDiff = now.getTime() - start.getTime();
const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(day + "일째");
```

<br>

## 2. 기념일 계산기

### 기념일까지 남은 날짜?

```bash
남은 밀리초 = 기념일.getTime() - 오늘.getTime()
남은 일 = 남은 밀리초를 일로 환산
```

<br>

- 발렌타인데이 데이터 객체 생성

```javascript
const valentine = new Date("2024-02-14");
```

<br>

- 두 시간의 차이를 구하면 오늘부터 발렌타인데이의 남은 시간이 밀리초로 나옴

```javascript
const valentine = new Date("2024-02-14");

const timeDiff2 = valentine.getTime() - now.getTime();
```

<br>

- 남은 시간 밀리초를 일로 환산하고 소수점 날리기

```javascript
const valentine = new Date("2024-02-14");

const timeDiff2 = valentine.getTime() - now.getTime();
const day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
```

<br>

- html 값으로 '일 남음' 글자 넣어주기

```javascript
const valentine = new Date("2024-02-14");

const timeDiff2 = valentine.getTime() - now.getTime();
const day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
$("#valentine").text(day2 + "일 남음");
```

<br>

## 3. 기념일 계산기

### 1000일은 언제인가?

```bash
1000일의 밀리초 = 사귄날.getTime() + 999일의.getTime()
1000일 = new Date(1000일의 밀리초)
```

<br>

- 1000d일에 해당하는 밀리초 구하고 1000일 데이터

```javascript
const ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);
const thousand = new Date(ms);
```

<br>

- `년, 월, 일` 구하고 html 값 넣어주기

```javascript
const ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);
const thousand = new Date(ms);
const thousandDate =
  thousand.getFullYear() +
  "." +
  (thousand.getMonth() + 1) +
  "." +
  thousand.getDate();
$("#thousand-date").text(thousandDate);
```

<br>

### 추가로 2000일은 언제?

```javascript
const ms2 = start.getTime() + 1999 * (1000 * 60 * 60 * 24);
const twoThousand = new Date(ms2);
const twoThousandDate =
  twoThousand.getFullYear() +
  "." +
  (twoThousand.getMonth() + 1) +
  twoThousand.getDate();
$("#two-thousand-date").text(twoThousandDate);
```

<br>

## 4. 기념일 계산기

### 오늘부터 1000일까지 며칠 남았는가?

```javascript
const timeDiff3 = thousand.getTime() - now.getTime();
const day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$("#thousand").text(day3 + "일 남음");
```

<br>

### 추가로 2000일까지 며칠 남았는가?

```javascript
const timeDiff4 = twoThousand.getTime() - now.getTime();
const day4 = Math.floor(timeDiff4 / (2000 * 60 * 60 * 24) + 1);
$("#two-thousand").text(day4 + "일 남음");
```
