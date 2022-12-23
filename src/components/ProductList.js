import React from 'react'
import Product from './Product'

const ProductList = ({products, ...props}) => {
  console.log(props)
  return <>
    {/* items={items}
    addToBasket={addToBasket} */}
    {products.map(product => <Product location="library" key={product.trackId ? product.trackId : product.artistId} media={product} addToBasket={props.addToBasket} inBasket={product.inBasket}/>)}
  </>
    
  
}

export default ProductList