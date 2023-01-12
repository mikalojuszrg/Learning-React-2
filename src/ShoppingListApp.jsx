import React from "react";
import { useState } from "react";

const ShoppingListApp = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems((prevItems) => [...prevItems, { itemName, quantity }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Shopping List</h2>
      <div>
        <label>Product item: </label>
        <input
          type="text"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
      </div>
      <div>
        <label>Product quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>
      <button>Add item to the list</button>
      <ol>
        {items.map((item) => (
          <li key={item.name}>
            {item.quantity} {item.itemName}
          </li>
        ))}
      </ol>
    </form>
  );
};

export default ShoppingListApp;
