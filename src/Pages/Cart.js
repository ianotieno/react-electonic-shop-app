import React, { useContext } from 'react'
import { PRODUCTS } from '../product'
import Product from './Product'
import { ShopContext } from '../context/shop-context'
import CartItem from './cartitem'
import{useNavigate} from "react-router-dom"
import "./cart.css"
const Cart = () => {
  const {cartItems,  getTotalCartAmount }=useContext(ShopContext);
  const totalAmount =getTotalCartAmount();
  const navigate = useNavigate();
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
        </div>
        
        { totalAmount > 0 ? (
        <div className="checkout">
          <div className="description"> <p><b>Subtotal Ksh:{totalAmount} </b></p></div>
        <button  onClick={()=>navigate("/")}>Continue Shopping</button>
        <button >checkout</button>
       </div>
       ) : (
        <h1>Your Cart Is Empty</h1>
       )}
       </div>
  )
}

export default Cart
