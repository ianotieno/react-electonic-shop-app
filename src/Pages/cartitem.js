import React from 'react'
import "./shop.css"
const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
  return (
    <div className="cartItem">
      <img src={productImage}/>
      <div className="description"></div>
      <p><b>{productName}</b></p>
      <p><b>ksh: {price}</b></p>
    </div>
  )
}

export default CartItem
