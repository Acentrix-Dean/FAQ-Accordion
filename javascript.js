const panelOne = document.getElementById("panelOne");
const panelTwo = document.getElementById("panelTwo");
const panelThree = document.getElementById("panelThree");
const panelFour = document.getElementById("panelFour");
const panelFive = document.getElementById("panelFive");
const answerOne = document.getElementById("answerOne");
const answerTwo = document.getElementById("answerTwo");
const answerThree = document.getElementById("answerThree");
const answerFour = document.getElementById("answerFour");
const answerFive = document.getElementById("answerFive");
const accordionOne = document.getElementById("accordionOne");
const accordionTwo = document.getElementById("accordionTwo");
const accordionThree = document.getElementById("accordionThree");
const accordionFour = document.getElementById("accordionFour");
const accordionFive = document.getElementById("accordionFive");
const downArrowOne = document.getElementById("downArrowOne");
const downArrowTwo = document.getElementById("downArrowTwo");
const downArrowThree = document.getElementById("downArrowThree");
const downArrowFour = document.getElementById("downArrowFour");
const downArrowFive = document.getElementById("downArrowFive");

accordionOne.addEventListener("click", function () {
  accordionOne.classList.toggle("selected");
  panelOne.classList.toggle("d-none");
  answerOne.classList.toggle("p-selected");
  downArrowOne.classList.toggle("arrow-selected");
});

accordionTwo.addEventListener("click", function () {
  accordionTwo.classList.toggle("selected");
  panelTwo.classList.toggle("d-none");
  answerTwo.classList.toggle("p-selected");
  downArrowTwo.classList.toggle("arrow-selected");
});

accordionThree.addEventListener("click", function () {
  accordionThree.classList.toggle("selected");
  panelThree.classList.toggle("d-none");
  answerThree.classList.toggle("p-selected");
  downArrowThree.classList.toggle("arrow-selected");
});

accordionFour.addEventListener("click", function () {
  accordionFour.classList.toggle("selected");
  panelFour.classList.toggle("d-none");
  answerFour.classList.toggle("p-selected");
  downArrowFour.classList.toggle("arrow-selected");
});

accordionFive.addEventListener("click", function () {
  accordionFive.classList.toggle("selected");
  panelFive.classList.toggle("d-none");
  answerFive.classList.toggle("p-selected");
  downArrowFive.classList.toggle("arrow-selected");
});
