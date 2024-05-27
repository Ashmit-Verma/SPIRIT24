import React from 'react';
import './hero.css'
const header = () => {
    return (
        <section className='Hero-wrap '>
            <div className="texts">
                <h1 className="small">IIT GUWAHATI'S</h1>
                 <h2 className='large'>SPIRIT</h2>
                <p className="quote">Feel the energy ,Embrace the Spirit .</p>

                <a href="/signup" className="signup">Sign up</a>
              </div>
        </section>
    )
}
export default header;