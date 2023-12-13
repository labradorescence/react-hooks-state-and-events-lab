import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [ isDarkMode, setIsDarkMode ] = useState(false)

  // const appClass = false ? "App dark" : "App light"

  const handleToggle = () => {
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode)
  }
  
  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={handleToggle}>{isDarkMode? "Dark Mode":"Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
