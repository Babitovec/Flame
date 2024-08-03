import React from "react";
import Home from "./components/home.js";
import Tasks from "./components/tasks.js";
import Frens from "./components/frens.js";
import Stats from "./components/stats.js";
import Navigation from "./components/navigation.js";

const tg = window.Telegram.WebApp;

tg.expand();
tg.disableVerticalSwipes();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      username: tg.initDataUnsafe?.user?.username || 'Guest'
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
        pageContent = <Home username={this.state.username} />;
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
        pageContent = <Home username={this.state.username} />;
    }

    return (
      <div>
        {pageContent}
        <Navigation changePage={this.changePage} currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default App;
