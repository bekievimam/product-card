import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";
import "./homework-11.js";
import "./comment.js"; 
import { Cream } from "./ProductClasses.js";
import Form from "./form.js";
import "./homework-13.js";

// Покраска всех карточек
const productCards = document.querySelectorAll('.catalog__item');
const changeColorCardsButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';
const googleUrl = 'https://www.google.com';

changeColorCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)

});

// Покраска первой карточки

const productFirstcard = document.querySelector('.catalog__item');
const changeColorFirstcard = document.querySelector('#change-color-first-card');

changeColorFirstcard.addEventListener('click', () => {
  productFirstcard.style.backgroundColor = blueColorHash;
});

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://www.google.com')
  } else {
    return;
  }
}

// Открыть консоль лог 
const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => {
  outputConsoleLog('ДЗ №6');
});

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

//Вывод заголвка в консоль 
const outputHeadingToConsole = document.querySelector('.catalog__title');

outputHeadingToConsole.addEventListener('mouseenter', () => { console.log(outputHeadingToConsole.textContent) });

//Изменения цвета кнопки 
const toggleColorButton = document.querySelector('#toggle-color-button');

toggleColorButton.addEventListener('click', () => {
  toggleColorButton.classList.toggle('second-color');
});

const product = new Cream ("Увлажнающий крем", "2500", "cухая кожа");

product.showTitleAndPrice()

console.log(product.skinType)


import Modal from "./modal.js";

const modal = new Modal("registrationModal");

const registrationButton = document.getElementById("registrationButton");

registrationButton.addEventListener("click", () => {
  modal.open();
});

const registrationForm = new Form ("registrationForm")

document.getElementById("registrationForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    alert("Регистрация не прошла");
    return;
  }

  const values = registrationForm.getValues();

  if (values.password !== values.confirmPassword) {
    alert("Пароли не совпадают");
    return;
  }

  console.log("Данные регистрации:", values);

  registrationForm.reset();

  modal.close();
});

const subscribeForm = new Form("subscribeForm");

document.getElementById("subscribeForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!subscribeForm.isValid()) {
    return;
  }

  const values = subscribeForm.getValues();

  console.log("Подписка:", {
    email: values.subscribeEmail
  });

  subscribeForm.reset();
});