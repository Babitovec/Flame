import React from "react";
import "../css/navigation.css";

// Navigation icons
import home_icon from '../img/home_icon.png';
import tasks_icon from '../img/tasks_icon.png';
import friends_icon from '../img/friends_icon.png';
import stats_icon from '../img/stats_icon.png';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <div className="nav-item" onClick={() => this.props.changePage('home')}>
          <img src={home_icon} alt="home" className="home_icon" />
          Home
        </div>
        <div className="nav-item" onClick={() => this.props.changePage('tasks')}>
          <img src={tasks_icon} alt="tasks" className="tasks_icon" />
          Tasks
        </div>
        <div className="nav-item" onClick={() => this.props.changePage('frens')}>
          <img src={friends_icon} alt="friends" className="friends_icon" />
          Frens
        </div>
        <div className="nav-item" onClick={() => this.props.changePage('stats')}>
          <img src={stats_icon} alt="stats_icon" className="stats_icon" />
          Stats
        </div>
      </nav>
    );
  }
}

export default Navigation;
