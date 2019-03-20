import React from 'react';

const SearchBar = (props) => {

  const handleSortChange = (e) => {
    props.handleSort(e.target)
  }

  const handleFilterChange = (e) => {
    props.handleFilter(e.target)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.selected === "Alphabetically"} onChange={handleSortChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.selected === "Price"} onChange={handleSortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
