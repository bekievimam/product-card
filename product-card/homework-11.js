const subscribeForm = document.querySelector(".subscribe-form");
const subscribeInput = document.querySelector(".subscribe-input");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log({
    email: subscribeInput.value
  });
});