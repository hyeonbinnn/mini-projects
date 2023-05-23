let 모달 = false;

document.querySelector(".btn1").addEventListener("click", function () {
  if (모달 == true) {
    document.querySelector(".뒷배경").style.display = "none";
    모달 = false;
  }
});

document.querySelector(".btn2").addEventListener("click", function () {
  if (모달 == false) {
    document.querySelector(".뒷배경").style.display = "flex";
    모달 = true;
  }
});
