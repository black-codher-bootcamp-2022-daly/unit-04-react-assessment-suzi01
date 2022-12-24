import React from 'react'

const BasketTotal = (props) => {
  console.log('total',props)
  return (
    <div>
      <div>{props.basketTotal}</div>
    </div>
  )
}

export default BasketTotal