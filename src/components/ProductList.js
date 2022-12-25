import React from 'react'
import Product from './Product'

const ProductList = ({items, ...props}) => {
  // console.log(props)
  return <>
    {/* items={items}
    addToBasket={addToBasket} */}
    {items.length === 0 ? 'No items found...' : items.map(item => <Product  key={item.trackId ? item.trackId : item.artistId} item={item} addToBasket={props.addToBasket} inBasket={item.inBasket}  />)}
  </>
    
  
}

export default ProductList