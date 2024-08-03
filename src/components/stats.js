import React from "react";
import "../css/stats.css";
import Navigation from "../components/navigation.js";

// Images
import crown_emoji_animated_compressed from "../img/crown_emoji_animated_compressed.gif"

class Stats extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <img src={crown_emoji_animated_compressed} alt="cronw_emoji_animated" className="crown-emoji-animated" />
          <span className="stats-header">Leaderboard</span>
          <div className="user-stats-box">
            <div className="username-and-burn-count-box">
              <div className="username">{this.props.username}</div>
              <div className="burn-count">5738 BURN</div>
            </div>
            <div className="user-rank">#256791</div>
          </div>
          <div className="total-users">2M Users</div>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Stats;
