import React from "react";
import './footer.css'

const Footer=()=>{
    return(
        <div className="footer-cont">
            <div className="first">
                <img src="spirit.png" alt="" className="spirit-logo"/>
                <img src="Frame 49.png" alt="Copyright"  className="copyright"/>
                <div className="social-media">
                    <img src="insta.png" alt=""  className="media-img"/>
                    <img src="youtube.png" alt="" className="media-img" />
                    <img src="fb.png" alt="" className="media-img" />
                </div>

            </div>
            <div className="big-div"><div className="second">
                <div className="quick">Quick Links</div>
                <div className="links-div">
                <div className="links">Home</div>
                <div className="links">Events</div>
                <div className="links">About Us</div>
                </div>
            </div>
            <div className="second">
            <div className="quick">Contact</div>
                <div className="links-div">
                <div className="links">+91 98550505050</div>
                <div className="links">Someone at Spirit</div>
                
                </div>
            </div></div>
        </div>
    )
}

export default Footer;