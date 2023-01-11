import React, {useState} from "react";

function Item({ name, category }) {

  const [cartStat, setCartStat] = useState(false)

  const checkCart = () => {
    setCartStat(!cartStat)
  }

  return (
    <li className={cartStat? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={checkCart}>{cartStat? "Remove From Cart":"Add to Cart" }</button>
    </li>
  );
}

export default Item;
