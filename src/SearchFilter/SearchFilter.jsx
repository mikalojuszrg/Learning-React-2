import React from "react";
import { useState } from "react";

const SearchFilter = () => {
  const fruitsArray = [
    "Banana",
    "Apple",
    "Lemon",
    "Cherry",
    "Pineapple",
    "Watermelon",
  ];

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue}></input>
      <div>
        {inputValue.length === 0
          ? fruitsArray.map((fruit) => <p key={fruit}>{fruit}</p>)
          : fruitsArray
              .filter((item) =>
                item.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((fruit) => <p key={fruit}>{fruit}</p>)}
      </div>
    </div>
  );
};

export default SearchFilter;
