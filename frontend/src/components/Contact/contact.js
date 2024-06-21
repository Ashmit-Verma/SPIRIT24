import React from "react";
import './contact.css';
 const Widget=()=>{
    return (
        <div className="contactdiv">
          <div className="contactdiv2">
            <div className="mb-4 md:mb-0">
              <h2 className="leftest">Need Help?<br/>We got you!</h2>
            </div>
            <div className="rightest">
              <div className="cont">
                <p >Harshitha</p>
                <p>6305582565</p>
                <p>h.rayi@iitg.ac.in</p>
                <p>LinkedIn - Harshitha Reddy</p>
              </div>
              <div className="cont">
                <p >Yuvraj</p>
                <p>73005 05333</p>
                <p>yuvrajsingh@iitg.ac.in</p>
                <a href="https://www.instagram.com/yuvraj.singh/" className="underline">
                <img src="insta.png"></img></a>
                <a href="https://www.linkedin.com/in/yuvraj/">
                <img src=""></img></a>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Widget;