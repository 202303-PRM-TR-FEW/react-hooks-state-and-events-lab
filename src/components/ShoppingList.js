import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [fiterdItems,setFiltredItems] = useState("All")
  function handleChang(e){
setFiltredItems(e.target.value)
  }
  const itemsToDisply = items.filter(item => {
    if(fiterdItems === 'All'){
      return true
    }else{
      return item.category === fiterdItems
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => handleChang(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisply.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
