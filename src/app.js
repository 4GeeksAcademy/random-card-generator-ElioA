/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const button = document.getElementById("myButton");
const numberTop = document.getElementById("number-top");
const numberBottom = document.getElementById("number-bottom");
const centerFigure = document.getElementById("figure");
const topFigure = document.getElementById("figure-top");
const bottomFigure = document.getElementById("figure-bottom");
const numbersAndLetters = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const figures = ["♠", "♣", "♥", "♦"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const randomIndex = (arr) => {
  return (arr = Math.floor(Math.random() * arr.length));
};
figure.innerHTML = figures[randomIndex(figures)];

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
}
