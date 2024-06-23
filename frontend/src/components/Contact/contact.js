import React from "react";
import './contact.css';

 const Widget=()=>{
    return (
        <div className="contactdiv">
          <div className="contactdiv2">
            <div className="heading-need">
              <h2 className="leftest">Need Help?<br/>We got you!</h2>
            </div>
            <div className="rightest">
              <div className="cont">
                <p ><strong>Harshitha</strong></p>
                <p>6305582565</p>
                <p>h.rayi@iitg.ac.in</p>
                <p><a href="https://www.linkedin.com/in/yuvraj/">Linkedin</a></p>
              </div>
              <div className="cont">
                <p ><strong>Yuvraj</strong></p>
                <p>7300505333</p>
                <p>yuvrajsingh@iitg.ac.in</p>
                <p><a href="https://shorturl.at/tXlDj">Instagram</a></p>
                <p><a href="https://www.linkedin.com/in/yuvraj/">Linkedin</a></p>
                
              </div>
            </div>
          </div>
        </div>
    )
}
export default Widget;