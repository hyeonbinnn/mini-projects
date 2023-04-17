## 1. 미니 스타크래프트
![preview](https://user-images.githubusercontent.com/117449788/232533729-956142d4-4c8a-4b1d-8a1f-56f0c1babadf.png)

### 게임 규칙
1) 왼쪽 저그 종족 -> 드론
2) 오른쪽 테란 종족이 숨어서 사격 가능 -> 벙커
3) 드론 침으로 벙커를 파괴하는 게임
4) 드론을 클릭하면 침으로 공격해 벙커의 HP를 1씩 감소시킴
5) 0이 되면 벙커가 사라짐
<br>

- 배경, 드론, 벙커, 침 이미지 넣기
```css
/* css */

.background {
  position: relative;
  background-image: url("./images/background.png");
  background-size: 500px 330px;
  width: 500px;
  height: 330px;
}
```
```html
<!-- body 내부 -->

<h1 id="hp">HP: 3</h1>
<div class="background">
  <img id="drone" src="./images/drone.png" alt="drone" />
  <img id="spit" src="./images/spit.png" alt="spit" />
  <img id="bunker" src="./images/bunker.png" alt="bunker" />
</div>
```
<br>  

- 드론을 클릭했을 때 침이 발사되게 하기 => 드론에 `.click();` 이벤트 붙이기
```javascript
$("#drone").click(function () {
  console.log("침 발사!");
 });
```
<br>

## 2. 미니 스타크래프트 
- 드론 이미지를 누르면 침 이미지 나오게 하기 => `.fadeIn();`
```javascript
$("#drone").click(function () {
  $("#spit").fadeIn();
});
```
<br>

## 3. 미니 스타크래프트
- 침을 발사해서 목표물까지 이동하기 => `.animate();`  
```javascript
.animate(properties, [ duration ], [ easing ], [ complete ] )

- properties = 애니메이션 효과를 줄 속성
- duration = 애니메이션 지속시간
- easing = 애니메이션 효과의 방식
- complete =  완료된 후 수행할 작업
```
  
<br>

- 현재 위치에서 왼쪽 간격을 150만큼 늘려주며 침 위치를 오른쪽으로 이동
```javascript
$("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=150" });
});
```
<br>

## 4. 미니 스타크래프트
- 침이 벙커에 맞으면 없어지게 하기 => `.fadeOut();`
```javascript
$("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=150" });
  $("#spit").fadeOut();
});
```
<br>

- 벙커 앞에 있는 침을 다시 드론 앞으로 원상복구시키기 => `.css();`
```javascript
$("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=150" });
  $("#spit").fadeOut();
  $("#spit").css({ left: "150px" });
});
```
<br>

## 5. 미니 스타크래프트
- 벙커가 침을 맞을 때마다 HP가 감소하도록 만들기
```javascript
let hp = 3;
$("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=150" });
  $("#spit").fadeOut();
  $("#spit").css({ left: "150px" });
  hp = hp - 1;
  $("#hp").text("HP : " + hp);
});
```
<br>

- But, HP가 더 빨리 변하니까 시점을 맞추기 위해 `callback 함수` 사용
- `.fadeOut();`이 종료되고 동작되는 익명함수 만들어서 HP 감소시키는 코드를 넣으면 순차적으로 실행
```javascript
let hp = 3;
$("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=150" });
  $("#spit").fadeOut(function () {
    $("#spit").css({ left: "150px" });
    hp = hp - 1;
    $("#hp").text("HP: " + hp);
  });
});
```
<br>

## 6. 미니 스타크래프트
- 벙커의 HP가 0이 되면 사라지게 만들기
```javascript
let hp = 3;
$("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=150" });
  $("#spit").fadeOut(function () {
    $("#spit").css({ left: "150px" });
    hp = hp - 1;
    $("#hp").text("HP: " + hp);
    if (hp == 0) {
      $("#bunker").fadeOut();
    }
  });
});
```

