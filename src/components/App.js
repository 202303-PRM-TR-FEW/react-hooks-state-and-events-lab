import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMood] = useState(false)
  const [buttonText, setButton] = useState(false)
  function handleClike () {
    setMood(pre => pre = !pre)
    setButton(pre => pre = !pre)
  }
  const appClass = mode ?   "App dark" : "App light"
  const textTogal = buttonText ? "Light Mode" : "Dark Mode"

  return (
    <div className= {appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClike}>{textTogal}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
