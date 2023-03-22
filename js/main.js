var first = document.querySelector(".first");
first.style.backgroundColor = "rgb(215, 146, 114)";
var second = document.querySelector(".second");
second.style.backgroundColor = "rgb(164, 226, 142)";
var third = document.querySelector(".third");
third.style.backgroundColor = "rgb(132, 35, 93)";
var fourth = document.querySelector(".fourth");
fourth.style.backgroundColor = "rgb(35, 192, 72)";
var fiveth = document.querySelector(".fiveth");
fiveth.style.backgroundColor = "rgb(97, 43, 217)";
var sixth = document.querySelector(".sixth");
sixth.style.backgroundColor = "rgb(77, 101, 166)";

var text = document.querySelector(".text");
var arr = [
  "rgb(215, 146, 114)",
  "rgb(164, 226, 142)",
  "rgb(132, 35, 93)",
  "rgb(35, 192, 72)",
  "rgb(97, 43, 217)",
  "rgb(77, 101, 166)",
];
var randomColor = arr[Math.floor(Math.random() * arr.length)];

text.textContent = randomColor;

first.innerHTML = "rgb(215, 146, 114)";
second.innerHTML = "rgb(164, 226, 142)";
third.innerHTML = "rgb(132, 35, 93)";
fourth.innerHTML = "rgb(35, 192, 72)";
fiveth.innerHTML = "rgb(97, 43, 217)";
sixth.innerHTML = "rgb(77, 101, 166)";

first.addEventListener("click", function () {
  if (first.style.backgroundColor == randomColor) {
    alert("true");
  } else {
    alert("false");
  }
});
second.addEventListener("click", function () {
  if (second.style.backgroundColor == randomColor) {
    alert("true");
  } else {
    alert("false");
  }
});
third.addEventListener("click", function () {
  if (third.style.backgroundColor == randomColor) {
    alert("true");
  } else {
    alert("false");
  }
});
fourth.addEventListener("click", function () {
  if (fourth.style.backgroundColor == randomColor) {
    alert("true");
  } else {
    alert("false");
  }
});
fiveth.addEventListener("click", function () {
  if (fiveth.style.backgroundColor == randomColor) {
    alert("true");
  } else {
    alert("false");
  }
});
sixth.addEventListener("click", function () {
  if (sixth.style.backgroundColor == randomColor) {
    alert("true");
  } else {
    alert("false");
  }
});
