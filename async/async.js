const usersContainer = document.getElementById("users-container");
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");
const clearUsersButton = document.getElementById("clear-users");
const getUsersButton = document.getElementById("get-users");
let isLoading = false;

function setLoading(value) {
    isLoading = value;
    clearUsersButton.disabled = value;
    getUsersButton.disabled = value;
}

function showError(error) {
    loadingElement.textContent = "";
    errorElement.textContent = "Ошибка при загрузке данных";
    console.error(error);
}

function validateUsers(users) {
    const fields = ["id", "name", "surname", "email", "age"];
    if (!Array.isArray(users) || users.some(user =>
        user === null || typeof user !== "object" ||
        fields.some(field => !Object.prototype.hasOwnProperty.call(user, field))
    )) {
        throw new Error("Некорректные данные пользователей");
    }
    if (new Set(users.map(user => String(user.id))).size !== users.length) {
        throw new Error("Идентификаторы пользователей должны быть уникальными");
    }
}

function loadUsers() {
    errorElement.textContent = "";
    try {
        const savedUsers = localStorage.getItem("users");
        if (savedUsers === null) {
            loadingElement.textContent = "Данные загружаются";
            setLoading(true);
            setTimeout(() => {
                fetch("async.json")
                    .then(response => {
                        if (response.ok === false) {
                            throw new Error("Не удалось загрузить пользователей");
                        }
                        return response.json();
                    })
                    .then(data => {
                        validateUsers(data.users);
                        const usersText = JSON.stringify(data.users);
                        localStorage.setItem("users", usersText);
                        usersContainer.textContent = "";
                        loadingElement.textContent = data.users.length === 0 ? "Пользователей нет" : "";
                        data.users.forEach(renderUser);
                    })
                    .catch(showError)
                    .finally(() => setLoading(false));
            }, 2000);
        } else {
            const users = JSON.parse(savedUsers);
            validateUsers(users);
            usersContainer.textContent = "";
            loadingElement.textContent = users.length === 0 ? "Пользователей нет" : "";
            users.forEach(renderUser);
        }
    } catch (error) {
        showError(error);
    }
}

function renderUser(user) {
    const card = document.createElement("div");
    card.dataset.userId = String(user.id);
    card.textContent = user.name + " " + user.surname + ", возраст: " + user.age +
        ", почта: " + user.email + ", пол: " + (user.gender ?? "не указан") + ", id: " + user.id;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    card.append(deleteButton);
    usersContainer.append(card);
    loadingElement.textContent = "";

    deleteButton.addEventListener("click", () => {
        if (isLoading) return;
        try {
            const userText = localStorage.getItem("users");
            const users = JSON.parse(userText);
            validateUsers(users);
            const updatedUsers = users.filter(currentUser => currentUser.id !== user.id);
            const updatedUsersText = JSON.stringify(updatedUsers);
            localStorage.setItem("users", updatedUsersText);
            card.remove();
            errorElement.textContent = "";
            loadingElement.textContent = updatedUsers.length === 0 ? "Пользователей нет" : "";
        } catch (error) {
            showError(error);
        }
    });
}

function clearUser() {
    if (isLoading) return;
    try {
        const usersText = JSON.stringify([]);
        localStorage.setItem("users", usersText);
        usersContainer.textContent = "";
        errorElement.textContent = "";
        loadingElement.textContent = "Пользователей нет";
    } catch (error) {
        showError(error);
    }
}

function getAllUsers() {
    if (isLoading) return;
    setLoading(true);
    errorElement.textContent = "";
    loadingElement.textContent = "Данные загружаются";
    fetch("async.json")
        .then(response => {
            if (response.ok === false) {
                throw new Error("Не удалось загрузить пользователей");
            }
            return response.json();
        })
        .then(data => {
            validateUsers(data.users);
            const cards = Array.from(usersContainer.children);
            const allDisplayed = cards.length === data.users.length &&
                data.users.every(user => cards.some(card => card.dataset.userId === String(user.id)));
            const usersText = JSON.stringify(data.users);
            localStorage.setItem("users", usersText);
            usersContainer.textContent = "";
            data.users.forEach(renderUser);
            if (data.users.length === 0) {
                loadingElement.textContent = "Пользователей нет";
            } else if (allDisplayed) {
                loadingElement.textContent = "Все пользователи уже отображены";
            }
        })
        .catch(showError)
        .finally(() => setLoading(false));
}

clearUsersButton.addEventListener("click", clearUser);
getUsersButton.addEventListener("click", getAllUsers);
loadUsers();
