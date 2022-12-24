import React from 'react'

const BasketTotal = (props) => {
  console.log('total',props)
  return (
    <div>
      <h1>Total £{props.basketTotal === 0 ? `0.00` : `${props.basketTotal}`}</h1>
    </div>
  )
}

export default BasketTotal