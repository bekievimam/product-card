class Product { 
  constructor(title,price) {
    this.title = title;
    this.price = price;
  } 
showTitleAndPrice () { 
console.log(this.title, this.price) } 
} 

 export class Cream extends  Product  { 
  constructor(title, price, skinType) {
  super(title, price);
  this.skinType = skinType;
}}