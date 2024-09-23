import React, { useContext } from 'react';
import { PRODUCTS } from '../product';
import Product from './Product';
import { ShopContext } from '../context/shop-context';
import CartItem from './cartitem';
import { useNavigate } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="description">
            <p>
              <b>Subtotal Ksh: {totalAmount} </b>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              className="addToCartBttn mt-4 bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </button>
            <button className="addToCartBttn mt-4 bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
              Checkout
            </button>
          </div>
          
          </div>
      ) : (
        <h1>Your Cart Is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
