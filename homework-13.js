class Drink {
    #temperature 
    constructor(name,size,price,temperature) {
        if (new.target === Drink) {
            throw new Error("Нельзя создать экземпляр абстрактного класса Drink напрямую!");
        }
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }
    getTemperture() {
        return this.#temperature;
    }

    setTempetura(tempeture) {
        if (tempeture < 0) {
            throw new Error("Температура не может быть меньше 0");
        }
        this.#temperature = tempeture;
    }
    #prepareDrink () {
        console.log(`Подготовить напиток ${this.name} , ${this.size} , ${this.price} , ${this.#temperature}`)
    }
    serveDrink(){
        this.#prepareDrink(); 
        console.log("Напиток подан");
    }
    getInfoDrink(){
        console.log(this.name, this.size, this.price, this.#temperature)
    }
}

class Coffee extends Drink {
 constructor(name, size, price,temperature, beans){
    super(name, size, price, temperature);
    this.beans = beans; 
    
 }
}
const myCoffee = new Coffee ("Эспрессо", "300ml", "350", "75", "Арабика");
myCoffee.getInfoDrink();
myCoffee.serveDrink();
console.log(myCoffee.beans);

class Tea extends Drink {
    constructor(name, size, price, temperature, herbs){
    super(name, size, price, temperature)
    this.herbs = herbs;
 }
}
const myTea = new Tea ("Черный","250ml", "150", "70", "Чабрец");
myTea.getInfoDrink();
myTea.serveDrink();
console.log(myTea.herbs);

class Lemonade extends Drink {
    constructor(name, size, price, temperature, hasIce){
    super(name, size, price, temperature)
    this.hasIce = hasIce;
 }
}
const myLemonade = new Lemonade ("Мохит", "500ml", "400", "5", "Со льдом")
myLemonade.getInfoDrink();
myLemonade.serveDrink();
console.log(myLemonade.hasIce);


class Cafe  {
    constructor(name, address) {
        this.name = name; 
        this.addres = address; 
    }
    getinfo(){
        console.log(this.name,this.addres)
    }
    orderDrink(drink) {
    console.log(`Зака: ${this.name}`);
        drink.serveDrink();
    }
}
const myCafe = new Cafe ("Мокко", "ул,Пушкина")
myCafe.orderDrink(myCoffee);
myCafe.orderDrink(myLemonade);
myCafe.orderDrink(myTea);
