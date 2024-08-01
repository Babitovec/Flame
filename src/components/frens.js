import React from "react"
import  "../css/frens.css" 
import Navigation from "../components/navigation.js";

// Images
import masks_animated from '../img/masks_animated.gif';
import Burn_logo_v2 from "../img/Burn-logo-v2.png";
 
class Frens extends React.Component {
    render() {
      return (
        <div>
            <div className="container">
                <img src={masks_animated} alt="masks_animated" className="masks-emoji-animated" />
                <span className="frens-header">Invite Friends<br />and get more BURN</span>
                <div className="claim-frens">
                    <div className="claimable-burn">
                        <img src={Burn_logo_v2} alt="burn_logo" className="burn-logo-claim" />
                        <div className="claimable-burn-count">156</div>
                    </div>
                    <div className="claim-button">
                        <div className="claim">Claim</div>
                    </div>
                </div>
                <div className="frens-discription">Score 10% from buddies + 2.5% from their referrals</div>
                <div className="frens-count">3 Friends</div>

                <div className="frens-invited-container">
                    <div className="invited-fren">
                        <div className="fren-info">
                            <div className="username-and-frens-count">
                                <div className="fren-username">zan_zannn</div>
                                <div className="username-frens-count">+4</div>
                            </div>
                            <div className="fren-total-earned-container">
                                <div className="fren-total-earned">4679</div>
                                <img src={Burn_logo_v2} alt="burn_logo" className="burn-logo-claim" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="invited-fren">
                        <div className="fren-info">
                            <div className="username-and-frens-count">
                                <div className="fren-username">Babitovec</div>
                                <div className="username-frens-count">+3</div>
                            </div>
                            <div className="fren-total-earned-container">
                                <div className="fren-total-earned">3201</div>
                                <img src={Burn_logo_v2} alt="burn_logo" className="burn-logo-claim" />
                            </div>
                        </div>
                    </div>

                    <div className="invited-fren">
                        <div className="fren-info">
                            <div className="username-and-frens-count">
                                <div className="fren-username">KryakZXD</div>
                                <div className="username-frens-count">+2</div>
                            </div>
                            <div className="fren-total-earned-container">
                                <div className="fren-total-earned">2172</div>
                                <img src={Burn_logo_v2} alt="burn_logo" className="burn-logo-claim" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="invite-fren-button">
                    <div className="invite-fren-text">Invite Friends</div>
                </div>

            </div>
            <Navigation />
        </div>
        );
    }
}

export default Frens