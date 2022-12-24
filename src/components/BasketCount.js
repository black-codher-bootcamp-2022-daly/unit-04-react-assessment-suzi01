import React from 'react'


const BasketCount = (props) => {
  // console.log('basketcount props', props)
  return (
    <div>
      <h2>{props.basketCount === 1 ? `${props.basketCount} item` : `${props.basketCount} items`}</h2>
    </div>
  )
}

export default BasketCount
