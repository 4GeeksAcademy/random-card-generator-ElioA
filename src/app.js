/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const button = document.getElementById("cardChanger");
const numberTop = document.getElementById("number-top");
const numberBottom = document.getElementById("number-bottom");
const centerFigure = document.getElementById("centerFigure");
const topFigure = document.getElementById("figure-top");
const bottomFigure = document.getElementById("figure-bottom");
const myCard = document.getElementById("myCard");
const cardWidth = document.getElementById("cardWidth");
const cardHeight = document.getElementById("cardHeight");

const numbersAndLetters = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const figures = ["♠", "♣", "♥", "♦"];

window.onload = function() {
  //write your code here
  getMyRandomCard();
  console.log("Hello Rigo from the console!");
  button.addEventListener("click", getMyRandomCard);
  setInterval(getMyRandomCard, 10000);

  myCard.style.height = cardHeight;
  cardWidth.addEventListener("change", e => {
    if (cardWidth.value == "") {
      myCard.style.width = "500px";
    } else {
      myCard.style.width = cardWidth.value;
    }
  });
  cardHeight.addEventListener("change", e => {
    if (cardHeight.value == "") {
      myCard.style.height = "600px";
    } else {
      myCard.style.height = cardHeight.value;
    }
  });
};
const randomIndex = arr => {
  return (arr = Math.floor(Math.random() * arr.length));
};

const getMyRandomCard = () => {
  numberTop.innerHTML = numbersAndLetters[randomIndex(numbersAndLetters)];
  numberBottom.innerHTML = numberTop.innerHTML;
  centerFigure.innerHTML = figures[randomIndex(figures)];
  topFigure.innerHTML = centerFigure.innerHTML;
  bottomFigure.innerHTML = centerFigure.innerHTML;

  if (centerFigure.innerHTML === "♥" || centerFigure.innerHTML === "♦") {
    numberTop.style.color = "red";
    numberBottom.style.color = "red";
    centerFigure.style.color = "red";
    topFigure.style.color = "red";
    bottomFigure.style.color = "red";
  } else {
    numberTop.style.color = "black";
    numberBottom.style.color = "black";
    centerFigure.style.color = "black";
    topFigure.style.color = "black";
    bottomFigure.style.color = "black";
  }
};
