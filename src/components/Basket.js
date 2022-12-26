import React from 'react'
import BasketCount from './BasketCount'
import BasketTotal from './BasketTotal'
import Product from './Product'

const Basket = ({basket, ...props}) => {
  const {location, basketCount, basketTotal, removeFromBasket} = props
  // const { basketTotal} = total
    // console.log('basket', basket)
    // console.log('props',basketTotal)
    // console.log(total)
  return <>
    <h1>Basket</h1>
    <BasketCount basketCount={basketCount} />
    <br/>
    {/* <BasketTotal basketTotal={basketTotal} /> */}
    {/* {props.inBasket === true} */}
    {/* <BasketTotal />
    <BasketCount />    */}
    {/* {products.length !== 0 && products.map(product => <Product key={product.id} media={product} addToBasket={props.addToBasket}/>)} */}
    {/* {basket.length ===0 ? 'Sorry, no items in basket' : <Product location="basket" products={basket} />} */}
    {basket === 0 ? 'Sorry, no items in basket..' : basket.map(basketItem =>
      <Product location={location} key={basketItem.trackId} item={basketItem} addToBasket={null} removeFromBasket={removeFromBasket} inBasket={basketItem.inBasket} />
     )}
     <h1>Total: £{basketTotal === 0 ? `0.00`:<BasketTotal basketTotal={basketTotal} />}</h1>
   
  </>
    
  
}

export default Basket