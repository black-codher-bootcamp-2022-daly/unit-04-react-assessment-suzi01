import React from "react";
import Product from "./Product";

const ProductList = ({ items, ...props }) => {
  // console.log(props)
  return (
    <>
      {/* items={items}
    addToBasket={addToBasket} */}
      {items.length === 0
        ? <div className="empty">No items found...</div>
        : items.map((item) => (
          <div className="product" key={item.trackId ? item.trackId : item.artistId}>
            <Product
              key={item.trackId ? item.trackId : item.artistId}
              item={item}
              addToBasket={props.addToBasket}
              removeFromBasket={props.removeFromBasket}
              inBasket={item.inBasket}
            />
            </div>
          ))}
    </>
  );
};

export default ProductList;
