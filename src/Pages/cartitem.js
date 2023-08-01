import React,{useContext} from 'react'
import "./cart.css"
import {ShopContext} from '../context/shop-context';
const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {cartItems, addToCart , removeFromCart, updateCartItemCount}=useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage}/>
      <div className="description"></div>
      <p><b>{productName}</b></p>
      <p><b>ksh: {price}</b></p>
      <div className="countHandler"> 
      <button onClick={()=>removeFromCart(id)}>-</button>
      <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
      <button onClick={()=>addToCart(id)}>+</button>
      </div>
    </div>

  )
}

export default CartItem
