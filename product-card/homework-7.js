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
    console.log ("Товар успешно приобретен")
  }  else {
   const diff = productPrice - userBudget;
   console.log("Вам не хватает " + diff + "$, пополните баланс");
  }
}
buyProduct(60000);
buyProduct(30000);