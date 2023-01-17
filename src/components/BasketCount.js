import React from 'react'


const BasketCount = (props) => {
  // console.log('basketcount props', props)
  return (

      <span>{props.basketCount === 1 ? `${props.basketCount} item` : `${props.basketCount} items`}</span>
  
  )
}

export default BasketCount
