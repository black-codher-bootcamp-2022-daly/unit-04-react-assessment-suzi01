import React from 'react'
import BasketCount from './BasketCount'
import BasketTotal from './BasketTotal'
import Product from './Product'

const Basket = ({basket, ...props}) => {
    console.log('basket', basket)
    console.log('props',props)
  return <>
    <BasketCount basketCount={props.basketCount}/>
    {/* {props.location !== "library"} */}
    {/* <BasketTotal />
    <BasketCount />    */}
    {/* {products.length !== 0 && products.map(product => <Product key={product.id} media={product} addToBasket={props.addToBasket}/>)} */}
    {/* {basket.length ===0 ? 'Sorry, no items in basket' : <Product location="basket" products={basket} />} */}
    {basket.map(basketItem => <Product location ="basket" key={basketItem.trackId} media={basketItem} removeFromBasket={props.removeFromBasket} />)}
    <BasketTotal basketTotal={props.basketTotal}/>
  </>
    
  
}

export default Basket