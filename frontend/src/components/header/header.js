import React from 'react';
import './header.css'

const header = () => {
    return (
        <section className='h-wrap'>
            <div className='navbar'>
                <div className="logo">
                   <a href="/"><img src="spiritlogo.jpg" alt="" /></a> 
                </div>
                <div className="points">
                    <a href="">about</a>
                    <a href="">Sponsors</a>
                    <a href="">Events</a>
                    <a href="">Faq</a>
                    <a href="">contact us</a>
                </div>
                <div className="login">
                    
                    <a href="/login" className="log">login</a>
                   
                </div>

            </div>

        </section>
    )
}
export default header;