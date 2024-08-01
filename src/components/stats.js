import React from "react"
import  "../css/stats.css" 
import Navigation from "../components/navigation.js";

//images
import cup_emoji_animated from "../img/cup-emoji-animated.gif"

class Stats extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <img src={cup_emoji_animated} alt="cup_emoji_animated" className="cup-emoji-animated" />
                    <span className="stats-header">Leaderboard</span>
                    <div className="user-stats-box">
                        <div className="username-and-burn-count-box">
                            <div className="username">Babitovec</div>
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


export default Stats