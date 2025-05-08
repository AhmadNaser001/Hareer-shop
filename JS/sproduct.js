let MainImg = document.querySelector(".MainImg");
let smallimg = document.querySelectorAll(".small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
  console.log("2");
};
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
  console.log("3");
};
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
  console.log("4");
};
