import React from 'react'
import './sponsors.css'

const Sponsors = () => {
    return (
        <div className='sponsorsMain' id="sponsors">
            <div className='sponsorHeader'>
                <h2>Our Partners</h2>
            </div>
            <div className='sponsors'>
                <div>
                    <h3 className='spon'>Presented by</h3>
                
                <a href="https://renaissance.programmingpathshala.com">
                    <img src="sponsor2.png" alt="Programming Pathshala"></img>
                </a>
                </div>
                <div>
                    <h3 className='spon'>Powered by</h3>
                <a href="https://yhills.com">
                    <img src="sponsor6.png" alt="Yhills"></img>
                </a>
                </div>
                <div>
                    <h3 className='spon'>Assessment Partner</h3>
                <a href="https://www.languify.in/">
                    <img src="sponsor1.png" alt="Languify"></img>
                </a>
                </div>
               
                <div>
                    <h3 className='spon'>Knowledge Partner</h3>
                <a href="https://interviewbuddy.net/">
                    <img src="sponsor3.png" alt="Interview Buddy"></img>
                </a>
                </div>
               
                <div>
                    <h3 className='spon'>Education Partner</h3>
                <a href="https://www.swapso.io/">
                    <img src="sponsor5.png" alt="Swapso"></img>
                </a>
                </div>
                <div>
                  <h3 className='spon'>Certificate Partner</h3>   
                <a href="https://givemycertificate.com/">
                    <img src="sponsor4.png" alt="Give My Certificate"></img>
                </a>
                </div>
               
                
                
            </div>
        </div>
    )
}

export default Sponsors;
