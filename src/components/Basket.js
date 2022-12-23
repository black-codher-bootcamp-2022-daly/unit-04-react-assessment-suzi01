import React from 'react'
import BasketCount from './BasketCount'
import BasketTotal from './BasketTotal'
import ProductList from './ProductList'
import Product from './Product'

const Basket = (products, ...props) => {
    console.log('products', products)
    console.log('props',props)
  return <>
    <BasketTotal />
    <BasketCount />
    {/* {products.length !== 0 && products.map(product => <Product key={product.id} media={product} addToBasket={props.addToBasket}/>)} */}
  </>
    
  
}

export default Basket