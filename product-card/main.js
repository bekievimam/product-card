// Покраска всех карточек
const productCards = document.querySelectorAll('.catalog__item');
const changeColorCardsButton = document.querySelector ('#change-color-all-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';
const googleUrl= 'https://www.google.com';

changeColorCardsButton.addEventListener ('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
  
});

// Покраска первой карточки

const productFirstcard = document.querySelector('.catalog__item');
const changeColorFirstcard = document.querySelector ('#change-color-first-card');

changeColorFirstcard.addEventListener ('click', () => {
  productFirstcard.style.backgroundColor = blueColorHash; });

// Открыть google

const openGoogleButton = document.querySelector ('#open-google');

openGoogleButton.addEventListener ('click', openGoogle)

function openGoogle () {
  const answer = confirm ('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open ('https://www.google.com')
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
  alert('10');
  console.log(message);
}

//Вывод заголвка в консоль 
 const outputHeadingToConsole = document.querySelector ('.catalog__title');

outputHeadingToConsole.addEventListener ('mouseenter', () => {console.log(outputHeadingToConsole.textContent)});

//Изменения цвета кнопки 
const toggleColorButton = document.querySelector('#toggle-color-button');

toggleColorButton.addEventListener('click', () => {
  toggleColorButton.classList.toggle('second-color');
});