import React from 'react'
import { PRODUCTS } from '../product'
import Product from './Product'
import "./shop.css"
const Shop = () => {
  return (
  

        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
     )
}

export default Shop
