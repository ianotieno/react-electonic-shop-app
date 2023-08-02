import React from 'react'
import { PRODUCTS } from '../product'
import Product from './Product'
import "./shop.css"
const Shop = () => {
  return (
  

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
     )
}

export default Shop
