import React from 'react'

const ImageCard = (props) => {
    return (

        <div className='img'>
            <img src={props.url}></img>
            <div className='imgdesc'>
                {props.desc}
            </div>
        </div>



    )
}

export default ImageCard
