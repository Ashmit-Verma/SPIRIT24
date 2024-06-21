import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Whyca.css";
import 'animate.css';

export default function Whyca() {
    const { ref: headingRef, inView: headingInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: listRef, inView: listInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <>
            <h1 
                ref={headingRef} 
                className={`heading animate__animated ${headingInView ? 'animate__bounceInUp animate__slow' : ''}`}
            >
                Why become CA?
            </h1>
            <ul 
                ref={listRef} 
                className={`tracking-in-contract ${listInView ? 'visible' : ''}`}
            >
                <li>Improve your leadership, managerial and communicative skills.</li>
                <li>Representing the north easts best sports festival at your college, being a part of the organising team.</li>
                <li>Help us build the biggest Sports festival in the nation.</li>
                <li>Prizes worth Rs.________ to be won.</li>
                <li>Level Wise Certification, the more you put your efforts better your level, only Sports Festival to really appreciate your efforts.</li>
                <li>FREE COURSES: Top-performing CAs will get access to online courses and a performance-based earning opportunity</li>
                <li>Full Waiver(upto...) of travel expense to SPIRIT, free accommodation, IIT Guwahati, shout outs on Insta pages on successful completion of tasks.Team merchandise, exclusive access to all events, and pictures with the artist performing</li>
            </ul>
        </>
    );
}
