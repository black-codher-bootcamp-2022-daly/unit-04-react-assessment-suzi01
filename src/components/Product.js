import React from 'react'

const Product = ({media, ...props}) => {
    const {artistName, trackName, trackPrice, trackId, kind, artworkUrl100, longDescription} = media
  return <>
    <div>
        <h2>{trackName}</h2>
        <h2>{artistName}</h2>
        {trackPrice ? <p>£{trackPrice}</p> :
        <p>No price available</p>}
        <img style={{width:"120px", height:"170px", marginTop:"16px"}} src={artworkUrl100} alt={trackName}></img>
        {kind !== "song" && <p>{longDescription ? `${longDescription.substring(0,500)}... `: `No description available`}</p> }
        <button onClick={() => props.addToBasket(trackId)}>{props.inBasket? "Remove" : "Add +"}</button>
    </div>
  </>
    
  
}

export default Product