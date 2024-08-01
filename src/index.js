import React from "react"
import * as ReactDOMClient from 'react-dom/client'; 
import  "./css/main.css" // подключение main.css, который применяется ко всему

import App from "./app.js"; // Подключение app.js 

const app = ReactDOMClient.createRoot(document.getElementById("app")) //создаем путь где будем выводить контент и указываем его как константу

app.render(<App />) //выводим в div <> то что внутри функции


const tg = window.Telegram.WebApp //позволяет работать с тг апи

tg.expand(); // растягивает на фулл скрин при запуске
tg.disableVerticalSwipes(); // Отключает скролл

// Получаем имя пользователя Telegram
const username = tg.initDataUnsafe.user ? tg.initDataUnsafe.user.username : "Unknown User";

// Заменяем текст "Babitovec" на имя пользователя
document.addEventListener("DOMContentLoaded", function() {
    const usernameElements = document.getElementsByClassName("username");
    for (let i = 0; i < usernameElements.length; i++) {
        usernameElements[i].textContent = username;
    }
});
