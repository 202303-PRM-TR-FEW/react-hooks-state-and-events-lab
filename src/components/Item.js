import React, { useState } from "react";

function Item({ name, category,key }) {
  const [inCart, setInCart]= useState(false)
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart" 
  const liClassName = inCart ? 'in-cart' : '';
function handleButtonClick (){
  setInCart(prev => prev = !prev)
}

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonClick} >{buttonText}</button>
    </li>
  );
}

export default Item;
