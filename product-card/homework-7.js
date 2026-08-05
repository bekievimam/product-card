function showWeather(city, temp) {
 console.log(`Cейчас в ${city} температура - ${temp} градусов по Цельсию`);
}
showWeather("Дербент", 30)

const SPEED_OF_LIGHT= 299792;

function checkSpeed (speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log ("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log ("Субсветовая скорость");
  }  else {
    console.log ("Скорость света");
  }
}
checkSpeed(500000)
checkSpeed(200000)
checkSpeed(299792)

const productName = "iPhone";
const productPrice = 50000;

function buyProduct (userBudget){
  if (userBudget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const diff = productPrice - userBudget;
    console.log(`Вам не хватает ${diff}$, пополните баланс`);
  }
}

buyProduct(60000);
buyProduct(30000);

function calculateTotalPrice(price, quantity) {
  return price * quantity;
}

function calculateTotalPrice(price, quantity) {
  return price * quantity;
}

console.log(calculateTotalPrice(100, 3));

const userAge = 20;
let isStudent = true;
let userCity = "Derbent"

console.log(userAge);
console.log(isStudent);
console.log(userCity);