import React from 'react';
import './header.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const header = () => {
    return (
        <section className='h-wrap'>
            <div className='navbar'>
                <div className="logo">
                    <img src="" alt="logo" />
                </div>
                <div className="points">
                    <a href="">about</a>
                    <a href="">Sponsors</a>
                    <a href="">Events</a>
                    <a href="">Faq</a>
                    <a href="">contact us</a>
                </div>
                <div className="login">
                    <button className='log'>login</button>
                    <button>user</button>
                </div>

            </div>

        </section>
    )
}
export default header;