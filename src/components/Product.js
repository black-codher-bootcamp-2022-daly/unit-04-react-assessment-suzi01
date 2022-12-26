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
  } = item;
  // console.log('products', props)
  return (
    <>

        <h2>{trackName}</h2>
        <h2>{artistName}</h2>
        {trackPrice ? <p>£{trackPrice}</p> : <p>No price available</p>}
        <img
          style={{ width: "120px", height: "170px", marginTop: "16px" }}
          src={artworkUrl100}
          alt={trackName}
        ></img>
        {kind !== "song" && (
          <p>
            {longDescription
              && `${longDescription.substring(0, 500)}... `}
          </p>
        )}
        {props.inBasket !== true ? (
          <button onClick={() => props.addToBasket(trackId ? trackId : artistId)}>
            {/* {props.inBasket ? "Remove" : "Add to Basket"} */}
            Add to Basket
          </button>
        ) : (
          <button onClick={() => props.removeFromBasket(trackId ? trackId : artistId)}>Remove</button>
        )}

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
