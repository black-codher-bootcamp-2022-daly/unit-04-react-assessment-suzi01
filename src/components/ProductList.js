import React from 'react'
import Product from './Product'

const ProductList = ({products, ...props}) => {
  return <>
    {/* items={items}
    addToBasket={addToBasket} */}
    {products.map(product => <Product key={product.id} media={product} addToBasket={props.addToBasket} inBasket={product.inBasket}/>)}
  </>
    
  
}

export default ProductList