import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../product';

const SearchComponent = ({ searchQuery }) => {
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
            <Link to={`/product/${product.id}`}>
              <img
                src={product.productImage}
                alt={product.productName}
                style={{ height: 40, marginRight: 10 }}
              />
              {`${product.productName}`}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchComponent;
