## 1. 자소서 글자수 계산기
![preview](https://user-images.githubusercontent.com/117449788/232546932-a1c68f92-06da-4001-a1c6-4aec80a0c27e.png)
<br><br>

- 자바스크립트를 이용해 원하는 값을 불러오기  
```javascript
document.getElementById('jasoseol').value
```  
<br>

- 가져온 값을 변수에 넣어주기
```javascript
let content = document.getElementById('jasoseol').value;
console.log(content);
```  
<br>

## 2. 자소서 글자수 계산기
- 가져온 값의 글자수 세기 `.length` => 문자열의 길이  
```javascript
let content = document.getElementById('jasoseol').value;
console.log(content.length);
```  
<br>

## 3. 자소서 글자수 계산기
- 화면에 글자수 표시하기
```javascript
let content = document.getElementById("jasoseol").value;
document.getElementById("count").innerHTML = content.length;
```  
<br>

- 특정 위치에 원하는 형태(0/200)에 찾은 값(글자수)을 넣어주기 => 자동형변환
```javascript
let content = document.getElementById("jasoseol").value;
document.getElementById("count").innerHTML =
"(" + content.length + "/200)";
```  
<br>

## 4. 자소서 글자수 계산기
- 긴 코드를 함수로 묶기
```javascript
function counter() {
  let content = document.getElementById("jasoseol").value;
  document.getElementById("count").innerHTML =
    "(" + content.length + "/200)";
}
counter();
```
<br>

## 5. 자소서 글자수 계산기
- 글자를 쓸 때마다 자동으로 글자수 세기
```html
<!--키보드가 눌리면 그때마다 글자수를 늘리는 이벤트-->
<!--이벤트=이벤트 핸들링-->

<textarea onkeydown="counter()" class="form-control" rows="3" id="jasoseol">
저는 인성 문제가 없습니다.</textarea>
```
<br>

## 6. 자소서 글자수 계산기
- 200자를 넘으면 더 이상 안 써지게 만들기
  - ~하면 => `조건문 if` 이용
  - 200글자 이후는 잘라버리기 => `.substring` 이용  
```javascript
function counter() {
  let content = document.getElementById("jasoseol").value;
  if (content.length > 200) {
    content = content.substring(0, 200);
    document.getElementById("jasoseol").value = content;
  }
  document.getElementById("count").innerHTML =
    "(" + content.length + "/200)";
}
counter();
```
