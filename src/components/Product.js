import React from 'react'

const Product = ({media, addToBasket, location, removeFromBasket, inBasket}) => {
    const {artistName, trackName, trackPrice, trackId, kind, artworkUrl100, longDescription, artistId} = media
  return <>
    <div>
        <h2>{trackName}</h2>
        <h2>{artistName}</h2>
        {trackPrice ? <p>£{trackPrice}</p> :
        <p>No price available</p>}
        <img style={{width:"120px", height:"170px", marginTop:"16px"}} src={artworkUrl100} alt={trackName}></img>
        {kind !== "song" && <p>{longDescription ? `${longDescription.substring(0,500)}... `: `No description available`}</p> }
        {location === 'library' ?
        (<button onClick={() => addToBasket(trackId ? trackId : artistId)}>{inBasket? "Remove" : "Add to Basket"}</button>)
        :
        (<button onClick={() => removeFromBasket(trackId)}>Remove</button>)}
    </div>
  </>
    
  
}

export default Product