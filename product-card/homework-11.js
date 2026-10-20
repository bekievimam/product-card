const subscribeForm = document.querySelector(".subscribe-form");

const subscribeInput = document.querySelector(".subscribe-input");

const registrationFormInput = document.querySelector(".registration-form");

const registrationButton = document.querySelector("#registrationButton");

const nameInput = document.querySelector("#name");

const lastNameInput = document.querySelector("#lastName");

const dateOfBirthInput = document.querySelector("#dateOfBirth");

const loginInput = document.querySelector("#login");

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");


registrationButton.addEventListener("click", () => {
    modal.classList.add("modal-showed");
    overlay.classList.add("overlay-showed");
});


subscribeForm.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log({
        email: subscribeInput.value
    });

});


const passwordInput = document.querySelector("#password");

const confirmPasswordInput = document.querySelector("#confirmPassword");

let user;


registrationFormInput.addEventListener("submit", (event) => {  

    event.preventDefault();

    if (!registrationFormInput.checkValidity()) {
        alert("Регистрация отклонена");
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Пароли не совпадают");
        return;
    }

    user = {
        name: nameInput.value,
        lastName: lastNameInput.value,
        dateOfBirth: dateOfBirthInput.value,
        login: loginInput.value,
        password: passwordInput.value,
        confirmPassword: confirmPasswordInput.value,
        createdOn: new Date(),
    };

    console.log(user);

    modal.classList.remove("modal-showed");
    overlay.classList.remove("overlay-showed");

});

const modalClose = document.querySelector(".modal-close");

modalClose.addEventListener("click", () => {
    modal.classList.remove("modal-showed");
    overlay.classList.remove("overlay-showed");
});