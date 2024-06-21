import React from 'react'
import './sponsors.css'

const Sponsors = () => {
    return (
        <div className='sponsorsMain' id="sponsors">
            <div className='sponsorHeader'>
                <h2>Our Partners</h2>
            </div>
            <div className='sponsors'>
                <a href="https://www.languify.in/">
                    <img src="sponsor1.png" alt="Languify"></img>
                </a>
                <a href="https://renaissance.programmingpathshala.com">
                    <img src="sponsor2.png" alt="Programming Pathshala"></img>
                </a>
                <a href="https://interviewbuddy.net/">
                    <img src="sponsor3.png" alt="Interview Buddy"></img>
                </a>
                <a href="https://givemycertificate.com/">
                    <img src="sponsor4.png" alt="Give My Certificate"></img>
                </a>
                <a href="https://www.swapso.io/">
                    <img src="sponsor5.png" alt="Swapso"></img>
                </a>
                <a href="https://yhills.com">
                    <img src="sponsor6.png" alt="Yhills"></img>
                </a>
            </div>
        </div>
    )
}

export default Sponsors;
