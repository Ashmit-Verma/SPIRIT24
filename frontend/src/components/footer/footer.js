import React from "react";
import './footer.css'
const Footer=()=>{
    return(
        <div className="footer-cont" id="footer">
            <div className="first">
                <img src="spirit.png" alt="" className="spirit-logo"/>
                <img src="Frame 49.png" alt="Copyright"  className="copyright"/>
                <div className="social-media">
                    <a href="https://www.instagram.com/spirit_iitguwahati/" target="_blank"><img src="insta.png" alt=""  className="media-img"/></a>
                    <a href="https://www.youtube.com/@spiritiitguwahati2541" target="_blank"><img src="youtube.png" alt="" className="media-img" /></a>
                    <a href="https://www.facebook.com/spiritiitg/" target="_blank"><img src="fb.png" alt="" className="media-img" /></a>
                </div>

            </div>
            <div className="big-div"><div className="second1">
                <div className="quick">Quick Links</div>
                <div className="links-div">
                <div className="links"><a href="/#home">Home</a></div>
                <div className="links"><a href="/#aboutus">About Us</a></div>
                </div>
            </div>
            <div className="second2">
            <div className="quick">Contact</div>
            <div className="contact">
                <div className="links-div">
                <div className="links">Harshitha</div> 
                <div className="links">63055 82565</div>
                <div className="links">h.rayi@iitg.ac.in</div>
                </div>
                <div className="links-div">
                <div className="links">Yuvraj</div>
                <div className="links">73005 05333</div>
                <div className="links">yuvrajsingh@iitg.ac.in</div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;