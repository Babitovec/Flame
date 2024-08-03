import React from "react"
import  "../css/home.css" 
import Navigation from "../components/navigation.js";

// Images
import background_filled_colour from '../img/background-filled-colour.png';
import burn_emoji_animated from '../img/burn_emoji_animated.gif';
import PFP from '../img/PFP.gif';
import burn_logo from '../img/Burn-logo.png';
import tg_background from '../img/tg_background.png';
import gift_emoji_animated from '../img/gift_emoji_animated.gif';


class Home extends React.Component {
    render() {
      return (
        <div>
            <div className="container">
                <div className="score-stats">
                    <img src={background_filled_colour} alt="background_filled_colour" className="score-background" />
                    <div className="score-stats-box">
                    <img src={burn_emoji_animated} alt="burn" className="burn-emoji-score" />
                    <a href="/score_story.html" className="score-stats-text">Your Score</a>
                    </div>
                </div>
        
                <div className="profile">
                    <img src={PFP} alt="PFP" className="profile-pic" />
                    <div className="username">?</div>
                    <div className="score">
                    <img src={burn_logo} alt="burn" className="burn-logo-score" />
                    <span className="score-count">5738</span>
                    </div>
                </div>
        
                <div className="chests">
                    <img src={tg_background} alt="chests" className="chests-background" />
                    <div className="in-chests">
                    <span className="gifts-header">Gifts</span>
                    <img src={gift_emoji_animated} alt="gift" className="chest" />
                    <span className="open-gift">Open</span>
                    </div>
                </div>
            </div>
            <Navigation />
        </div>
        );
    }
}

export default Home
