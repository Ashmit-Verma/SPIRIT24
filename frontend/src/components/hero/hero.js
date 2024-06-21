import React from 'react';
import './hero.css'
const header = () => {
    return (
        <section className='Hero-wrap ' id="home">
            <div className="texts animation">
                <div>
                 <h2 className='large'>CAMPUS AMBASSADOR</h2>
                 <h2 className='large'>PROGRAM SPIRIT'24</h2>   
                </div>
                <p className="quote">Feel the energy ,Embrace the Spirit .</p>

                <a href="/signup" className="signup">Sign up</a>
              </div>
        </section>
    )
}
export default header;