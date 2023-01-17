import React from "react";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";
import Product from "./Product";

const Basket = ({ basket, location, basketCount, basketTotal, removeFromBasket }) => {
  // const { location, basketCount, basketTotal, removeFromBasket } = props;
  // const { basketTotal} = total
  // console.log('basket', basket)
  // console.log('props',basketTotal)
  // console.log(total)
  return (
    <>
      <h2>Basket</h2>
      <BasketCount basketCount={basketCount} />
   
      <br />
       {basket.length === 0 
        ? (<div className="empty">Sorry, no items in basket...</div>)
        : (basket.map((basketItem) => (
          <div className="product" key={basketItem.trackId}>
            <Product
              location={location}
              // key={basketItem.trackId}
              item={basketItem}
              removeFromBasket={removeFromBasket}
              inBasket={basketItem.inBasket}
            />
            </div>
          )))}
      <h2 className="total">
        Total: £
        {basketTotal === 0 ? `0.00` : <BasketTotal basketTotal={basketTotal} />}
      </h2>
    </>
  );
};

export default Basket;
