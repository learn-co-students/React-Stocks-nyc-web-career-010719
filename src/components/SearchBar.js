import React from 'react';

const SearchBar = (props) => {

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.selectedOption === "Alphabetically"} onChange={(event) => props.handleOptionChange(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.selectedOption === "Price"} onChange={(event) => props.handleOptionChange(event)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.searchStocks(event)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
