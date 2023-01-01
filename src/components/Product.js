import React from "react";
import PropTypes from "prop-types";

const Product = ({
  // item,
  // addToBasket,
  // location,
  // removeFromBasket,
  // inBasket,
  item, ...props
}) => {
  const {
    artistName,
    trackName,
    trackPrice,
    trackId,
    kind,
    artworkUrl100,
    longDescription,
    artistId,
    inBasket
  } = item;
  // console.log('products', props)
  return (
      <>
      <img
          src={artworkUrl100}
          alt={trackName}
        ></img>
        <div className="item-details">
        <h2>{trackName}</h2>
        <h2>{artistName}</h2>
        {trackPrice ? <p className="price">£{trackPrice}</p> : <p>-</p>}
        
        {kind !== "song" && (
          <p className="long-description">
            {longDescription
              && `${longDescription.substring(0, 500)}... `}
          </p>
        )}
        </div>
        <div className="buttons">
        {inBasket !== true ? (
          <button className="add-button" onClick={() => props.addToBasket(trackId ? trackId : artistId)}>
            {/* {props.inBasket ? "Remove" : "Add to Basket"} */}
            Add to Basket
          </button>
        ) : (
          <button className="close-button" onClick={() => props.removeFromBasket(trackId ? trackId : artistId)}>Remove</button>
        )}
        </div>
</>
  );
};

Product.propTypes = {
  items: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackPrice: PropTypes.number.isRequired,
    trackId: PropTypes.number.isRequired,
    kind: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    artistId: PropTypes.number,
  }),
};

export default Product;
