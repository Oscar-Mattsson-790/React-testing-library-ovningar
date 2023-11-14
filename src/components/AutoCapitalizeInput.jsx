import { useState } from "react";

export default function AutoCapitalizeInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const capitalizedValue =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setInputValue(capitalizedValue);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      aria-label="Auto-capitalized input"
    />
  );
}
