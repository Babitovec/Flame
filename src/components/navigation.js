import React from "react";
import "../css/navigation.css";

import home_icon from '../img/home_icon.png';
import tasks_icon from '../img/tasks_icon.png';
import friends_icon from '../img/friends_icon.png';
import stats_icon from '../img/stats_icon.png';

class Navigation extends React.Component {
  render() {
    const { currentPage, changePage } = this.props;

    return (
      <nav className="navigation">
        <div
          className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => changePage('home')}
        >
          <img src={home_icon} alt="home" className="home_icon" />
          Home
        </div>
        <div
          className={`nav-item ${currentPage === 'tasks' ? 'active' : ''}`}
          onClick={() => changePage('tasks')}
        >
          <img src={tasks_icon} alt="tasks" className="tasks_icon" />
          Tasks
        </div>
        <div
          className={`nav-item ${currentPage === 'frens' ? 'active' : ''}`}
          onClick={() => changePage('frens')}
        >
          <img src={friends_icon} alt="friends" className="friends_icon" />
          Frens
        </div>
        <div
          className={`nav-item ${currentPage === 'stats' ? 'active' : ''}`}
          onClick={() => changePage('stats')}
        >
          <img src={stats_icon} alt="stats_icon" className="stats_icon" />
          Stats
        </div>
      </nav>
    );
  }
}

export default Navigation;

