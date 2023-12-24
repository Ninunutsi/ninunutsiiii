import { useState } from "react";
import "./FilterStyle.css";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedPriceOption, setSelectedPriceOption] = useState("");
  const [selectedColorOption, setSelectedColorOption] = useState("");

  const handleClick = () => {
    setShowFilter((prevState) => !prevState);
  };

  const handlePriceChange = (event) => {
    setSelectedPriceOption(event.target.value);
    setShowFilter(false);
  };

  const handleColorChange = (event) => {
    setSelectedColorOption(event.target.value);
    setShowFilter(false);
  };

  return (
    <div className="filter-container">
      <span
        className="material-symbols-outlined filter-icon"
        onClick={handleClick}
      >
        page_info
      </span>
      {showFilter && (
        <div className="filter-dropdown">
          <select
            className="filter-select-options"
            name="select-size"
            value={selectedPriceOption}
            onChange={handlePriceChange}
          >
            <option value="price">Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
          <select
            className="filter-select-options"
            name="select-color"
            value={selectedColorOption}
            onChange={handleColorChange}
          >
            <option value="color">Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="white">White</option>
            <option value="black">Black</option>
          </select>
          <span className="filter-options">With Discount</span>
          <span className="filter-options">Newest</span>
        </div>
      )}
    </div>
  );
};

export default Filter;
