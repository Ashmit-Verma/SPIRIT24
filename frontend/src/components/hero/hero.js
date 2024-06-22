import React from 'react';
import './hero.css'
const header = () => {
    return (
        <section className='Hero-wrap ' id="home">
            <div className="texts animation">
                <div className='inner-div'>
                 <h2 className='large'>CAMPUS AMBASSADOR</h2>
                 <h2 className='large'>PROGRAM SPIRIT'24</h2>   
                </div>
                <p className='slogan'>Advertise | Organise | Conduct | Coordinate</p>
                <p className='tagline'>With the vision to bring out the true Leader in you Spirit IIT Guwahati, presents the<br/> Campus Ambassador Program</p>
                <a href="/signup" className="signup">Sign up</a>
              </div>
        </section>
    )
}
export default header;