import React, { useContext } from 'react'
import { PRODUCTS } from '../product'
import Product from './Product'
import { ShopContext } from '../context/shop-context'
import CartItem from './cartitem'

const Cart = () => {
  const {cartItems}=useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
       if(cartItems[product.id]!==0){
        return<CartItem data={product}/>
       }
        })}
        <div className="checkout"><p>subtotal Ksh: </p></div>
        <button  className="addToCartBttn">Continue Shopping</button>
        <button  className="addToCartBttn">checkout</button>
      </div>
    </div>
  )
}

export default Cart
