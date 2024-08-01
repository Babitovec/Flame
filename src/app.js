import React from "react";
import Home from "./components/home.js";
import Tasks from "./components/tasks.js";
import Frens from "./components/frens.js";
import Stats from "./components/stats.js";
import Navigation from "./components/navigation.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    let pageContent;
    switch (this.state.currentPage) {
      case 'home':
        pageContent = <Home />;
        break;
      case 'tasks':
        pageContent = <Tasks />;
        break;
      case 'frens':
        pageContent = <Frens />;
        break;
      case 'stats':
        pageContent = <Stats />;
        break;
      default:
        pageContent = <Home />;
    }

    return (
      <div>
        {pageContent}
        <Navigation changePage={this.changePage} />
      </div>
    );
  }
}

export default App;

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

