import React from "react";
import Product from "./Product";

const Main = ({ products, onAdd, onRemove, cartItems }) => {
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div>
            <Product
              item={cartItems.find((x) => x.id === product.id)}
              onAdd={onAdd}
              onRemove={onRemove}
              product={product}
              key={product.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
