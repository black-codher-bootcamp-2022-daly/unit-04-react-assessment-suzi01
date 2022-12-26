import React from "react";
import Product from "./Product";

const ProductList = ({ items, ...props }) => {
  // console.log(props.inBasket)
  return (
    <>
      {/* items={items}
    addToBasket={addToBasket} */}
      {/* {console.log(item)} */}
      {/* let word = {props.location === "library" ? inBasket= true : inBasket = false} */}
      {items.length === 0
        ? <div className="empty">No items found...</div>
        : items.map((item) => (
          <div className="product" key={item.trackId ? item.trackId : item.artistId}>
            {/* {} */}
            <Product
              key={item.trackId ? item.trackId : item.artistId}
              item={item}
              inBasket={!item.inBasket ? item.inBasket = false : item.inBasket}
              addToBasket={props.addToBasket}
              removeFromBasket={props.removeFromBasket}
            />
            {console.log(item.inBasket)}
            </div>
          ))}
    </>
  );
};

export default ProductList;
