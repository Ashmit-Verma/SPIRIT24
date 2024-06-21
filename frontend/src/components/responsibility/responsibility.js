import React, { useEffect, useRef } from "react";
import "./responsibility.css";
import "animate.css";

export default function Caresponsibility() {
  const responsibilityRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Change this threshold as per your requirement
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__bounceInUp", "animate__slow");
          observer.unobserve(entry.target);
        }
      });
    }, options);

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
    <div className="Responsibility" ref={responsibilityRef}>
      <h1 className="heading">Responsibilities</h1>
      <div className="cardCollection">
        <div className="card1">
          <h2>Advertise</h2>
          <p className="tracking-in-contract">Publicise Spirit and its sponsors in your college by sharing posts and promoting content by becoming a focal point for your respective college.</p>
        </div>
        <div className="card1">
          <h2>Coordinate</h2>
          <p className="tracking-in-contract">Collaborate with the Spirit team in organising on-ground events in your city.</p>
        </div>
        <div className="card1">
          <h2>Conduct</h2>
          <p className="tracking-in-contract">Help in management of elimination rounds in your college and city to select participants for the main event</p>
        </div>
        <div className="card1">
          <h2>Organise</h2>
          <p className="tracking-in-contract">Organise events, workshops and sessions regarding Spirit and what it has to offer with assistance from mentors.</p>
        </div>
      </div>
    </div>
  );
}
