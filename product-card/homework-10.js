import productList from "./products.js";

const template = document.querySelector("#product-template");
const catalogList = document.querySelector(".catalog__list");

function getCardsCount() {
  const count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));

  if (count >= 1 && count <= 5) {
    return count;
  }

  return 5;
}

function renderCards(products) {
  catalogList.innerHTML = "";

  products.forEach((product) => {
    const card = template.content.cloneNode(true);

    const image = card.querySelector(".catalog__image");
    const application = card.querySelector(".catalog__application");
    const name = card.querySelector(".catalog__name");
    const description = card.querySelector(".catalog__description");
    const compositionList = card.querySelector(".catalog__composition-list");
    const price = card.querySelector(".catalog__price-value");

    image.src = product.image;
    image.alt = product.title;
    application.textContent = product.application;
    name.textContent = product.title;
    description.textContent = product.description;
    price.textContent = `${product.price} ₽`;

    compositionList.innerHTML = "";

    product.composition.forEach((item) => {
      const li = document.createElement("li");

      li.classList.add("catalog__composition-item");
      li.textContent = item;

      compositionList.append(li);
    });

    catalogList.append(card);
  });
}

const cardsCount = getCardsCount();

renderCards(productList.slice(0, cardsCount));

const productDescriptions = productList.reduce((result, product) => {
  result[product.title] = product.description;

  return result;
}, {});

console.log(productDescriptions);