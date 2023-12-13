import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  console.log(items)
  const [ selectedCategory, setSelectedCategory ] = useState(items) //[]ARR

  const handleCategoryChange = (event) => {
    //console.log(event.target.value) //string
    
    // [] .filter

    const filteredItemArr = items.filter(item => {
      console.log(item.category, event.target.value)
      return item.category === event.target.value
    })
    setSelectedCategory(filteredItemArr)
    
    //setSelectedCategory(event.target.value)
    //console.log(selectedCategory)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" 
                onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
