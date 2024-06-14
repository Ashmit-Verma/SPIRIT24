import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    return (
        <section className='h-wrap'>
            <div className='navbar' >
                <div className="logo">
                   <a href="/"><img src="spiritlogo.jpg" alt="" /></a> 
                </div>
                <div className="points">
                    <a href="/#aboutus">About</a>
                    <a href="">Sponsors</a>
                    {/* <a href="/Leaderboard">Leaderboard</a> */}
                    <a href="/#faq">FAQ</a>
                    <a href="/#footer">Contact Us</a>
                </div>
                <div className="login">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="log">Logout</button>
                    ) : (
                        <a href="/login" className="log">Login</a>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Header;