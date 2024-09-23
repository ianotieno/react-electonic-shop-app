import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';

 const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const{ addToCart,cartItems }=useContext(ShopContext); 
   const cartItemAmount=cartItems[id]
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
     <img src={productImage} />
     <div className=" text-center border border-gray-300 px-2 py-1">
        <p><b>
            {productName}
            </b></p>
            <p>Ksh: {price}</p>
            <button className="addToCartBttn" onClick={()=>addToCart(id)} >Add To Cart
            {cartItemAmount>0 && <>({cartItemAmount})</>}
            </button>
     </div>
    </div>
  )
}
export default Product;