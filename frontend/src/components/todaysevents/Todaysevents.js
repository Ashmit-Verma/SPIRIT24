import React from 'react'
import './Todaysevents.css'
import ImageCard from './ImageCard'
const Todaysevents = () => {
    return (
        <div className='tecont'>
            <div className='teheading'>
                <div className='heading1'>Todays Events</div>
                <div className='tecontent'>For a detailed schedule visit <a href='' style={{ textDecoration: "underline" }}>Events Page</a></div>
            </div>
            <div className='imggrid'>
                <ImageCard url=" " desc="Hello" />
                <ImageCard url=" " desc="Hello" />
                <ImageCard url=" " desc="Hello" />
                <ImageCard url=" " desc="Hello" />
                <ImageCard url=" " desc="Hello" />
                <ImageCard url=" " desc="Hello" />

            </div>


        </div>
    )
}

export default Todaysevents
