import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../product';



const SearchComponent = ({ searchQuery }) => {
  // If searchQuery is empty, do not display anything
  if (!searchQuery.trim()) {
    return null;
  }

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ marginTop: 10 }}>
      {filteredProducts.length === 0 ? (
        <span>No matching products found</span>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
           
              <img src={product.productImage} alt={product.productName} style={{ height: 40, marginRight: 10 }} />
              {`${product.productName}`}
           
          </div>
        ))
      )}
    </div>
  );
};

export default SearchComponent;
