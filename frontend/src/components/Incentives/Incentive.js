import React, { useEffect, useRef } from "react";
import "./Incentive.css";
import "animate.css";

export default function Incentive() {
  const responsibilityRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeIn"); // Add fadeIn animation class
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (responsibilityRef.current) {
      observer.observe(responsibilityRef.current);
    }

    return () => {
      if (responsibilityRef.current) {
        observer.unobserve(responsibilityRef.current);
      }
    };

  }, []);

  return (
    <div className="Responsibility1" id="incent">
      <h1 className="heading">Incentives</h1>
      <div   style={{display:"flex",gap:"30px",justifyContent:"center", flexWrap:"wrap"}}>
        <div className="card2">
          <div style={{display:"flex"}}>
            <img src="/Award.png" style={{objectFit:"contain"}}></img>
            <h2 style={{paddingLeft:"5px",textAlign:"center"}}>Certification</h2>
          </div>
          <p className="tracking-in-contract" style={{textAlign:"center"}}>Certificate of appreciation from Spirit, IIT Guwahati recognising your Hardwork.</p>
        </div>
        <div className="card2">
            <div style={{display:"flex"}}>
        <img src="/Gift.png" style={{objectFit:"contain"}}></img>
            <h2 style={{paddingLeft:"5px"}}>Goodies and Merchandise</h2>
          </div>
          <p className="tracking-in-contract" style={{textAlign:"center"}}>Win Spirit merchandise, rewards, gift vouchers from top brands and much more!</p>
        </div>
        
        <div className="card2">
        <div style={{display:"flex"}}>
        <img src="/Quality.png" style={{objectFit:"contain"}}></img>
            <h2 style={{paddingLeft:"5px"}}>Internship Opportunities</h2>
          </div>
          <p className="tracking-in-contract" style={{textAlign:"center"}}>get a chance to gain professional experience through internship provided by top companies</p>
        </div>
        </div>
        </div>
  );
}
