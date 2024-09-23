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
    <div className="mt-4">
      {filteredProducts.length === 0 ? (
        <span className="text-gray-600">No matching products found</span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex items-center p-4 bg-white shadow-md rounded-lg">
              <img src={product.productImage} alt={product.productName} className="w-10 h-10 object-cover rounded-lg mr-4" />
              <Link to={`/product/${product.id}`} className="text-gray-800 font-semibold">
                {product.productName}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
