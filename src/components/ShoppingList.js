import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const itemsToDisplay = items.filter(item => {
    if(selectedCategory === "All")return true
    return item.category === selectedCategory;
  })

  const selectC = (e) => {
    //console.log(e.target.value)
    setSelectedCategory(e.target.value)  
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectC}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
