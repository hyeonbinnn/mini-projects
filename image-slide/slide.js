const loc = 0;
document.querySelector(".btn1").addEventListener("click", function () {
  if (loc < 0) {
    loc += 100;
    document.querySelector(".slide").style.transform = `translate(${loc}vw)`;
  }
});
document.querySelector(".btn2").addEventListener("click", function () {
  if (loc > -200) {
    loc -= 100;
  }
  document.querySelector(".slide").style.transform = `translate(${loc}vw)`;
});
