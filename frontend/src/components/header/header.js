import React from 'react';
import './header.css'

const header = () => {
    return (
        <section className='h-wrap'>
            <div className='navbar'>
                <div className="logo">
                   <img src="spiritlogo.jpg" alt="" /> 
                </div>
                <div className="points">
                    <a href="">about</a>
                    <a href="">Sponsors</a>
                    <a href="">Events</a>
                    <a href="">Faq</a>
                    <a href="">contact us</a>
                </div>
                <div className="login">
                    
                    <a href="" className="log">login</a>
                   
                </div>

            </div>

        </section>
    )
}
export default header;