import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';

 const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const{ addToCart }=useContext(ShopContext); 

  return (
    <div className="product">
     <img src={productImage} />
     <div className="description">
        <p><b>
            {productName}
            </b></p>
            <p>Ksh: {price}</p>
            <button className="addToCartBttn" onClick={()=>addToCart(id)} >Add To Cart</button>
     </div>
    </div>
  )
}
export default Product;