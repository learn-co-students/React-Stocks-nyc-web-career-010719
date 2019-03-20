import React from 'react';

const SearchBar = ({ handleSort }) => {

  const handleChange = (e) => {
    // debugger
    handleSort(e.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
