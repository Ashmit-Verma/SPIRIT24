import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            window.location.href = '/';
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className='h-wrap'>
            <div className='navbar'>
                <div className="logo">
                   <a href="/"><img src="spiritlogo.jpg" alt="Logo" /></a> 
                </div>
                <div className={`points ${isMenuOpen ? 'active' : ''}`}>
                    <a href="/#aboutus">About</a>
                    <a href="/#sponsors">Sponsors</a>
                    <a href="/#faq">FAQ</a>
                    <a href="/#footer">Contact Us</a>
                </div>
                <div className="login">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="logbut">Logout</button>
                    ) : (
                        <a href="/login" className="log">Login</a>
                    )}
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="/#aboutus">About</a></li>
                <li><a href="/#sponsors">Sponsors</a></li>
                <li><a href="/#contactus">Contact Us</a></li>
                <li><a href="/#faq">FAQ</a></li>
            </ul>
        </section>
    );
};

export default Header;
