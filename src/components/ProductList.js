import React from "react";
import Product from "./Product";

const ProductList = ({ items, ...props }) => {
  // console.log(props.location)
  return (
    <>
      {/* items={items}
    addToBasket={addToBasket} */}
      {/* {console.log(item)} */}
      
      {items.length === 0
        ? <div className="empty">No items found...</div>
        : items.map((item) => (
          <div className="product" key={item.trackId ? item.trackId : item.artistId}>
            <Product
              key={item.trackId ? item.trackId : item.artistId}
              item={item}
              inBasket={item.inBasket}
              addToBasket={props.addToBasket}
              removeFromBasket={props.removeFromBasket}
              
            />
            </div>
          ))}
    </>
  );
};

export default ProductList;
