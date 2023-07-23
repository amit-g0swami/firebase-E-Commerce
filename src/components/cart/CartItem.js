import React from "react";

export const CartItem = ({ item, handleClick }) => {
  return (
    <div className="product-name">
      <img src={item?.image} alt="" className="product-image" />
      <div>{item?.title.slice(0, 10)}...</div>
      <div>{item?.price} $</div>
      <button onClick={() => handleClick(item.id)}>Remove from Cart</button>
    </div>
  );
};
