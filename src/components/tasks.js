import React from "react"
import "../css/tasks.css"
import Navigation from "../components/navigation.js";

// Images
import burn_emoji_animated from "../img/burn_emoji_animated.gif"
import tg_icon from "../img/tg_icon.png"
import x_icon from "../img/x_icon.png"

class Tasks extends React.Component {
    render() {
        return (
          <div>
            <div className="container">
                <img src={burn_emoji_animated} alt="burn" className="burn-logo" />
                <span className="tasks-header">Tasks</span>
                <span className="tasks-description">We’ll reward you immediately with points after each task completion.</span>
                <div className="tasks">
                    <div className="subscription">
                        <img src={tg_icon} alt="tg_icon" className="icon" />
                        <div className="text">
                            <div className="title">Subscribe to Burn Telegram</div>
                            <div className="points">+100 Burn</div>
                        </div>
                        <div className="open-button">
                            <div className="open">Open</div>
                        </div>
                    </div>
                    <div className="subscription">
                        <img src={x_icon} alt="x_icon" className="icon" />
                        <div className="text">
                            <div className="title">Subscribe to Burn X</div>
                            <div className="points">+100 Burn</div>
                        </div>
                        <div className="open-button">
                            <div className="open">Open</div>
                        </div>
                    </div>
                </div>  
            </div>
            <Navigation />
          </div>
        );
    }
}


export default Tasks