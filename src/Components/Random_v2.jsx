import React from 'react';
import useGif from '../useGif'

const Tag = () => {
    const {gif,fetchGif} = useGif(tag)
        
            return(
                <div className="container">
                <h1>Random</h1>
                <img width="500" src={gif} alt=""/>
                <button onClick={fetchGif}>CLICK FOR NEW</button>
                </div>
            )
}
export default Tag;