import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="search">

      <strong>Sort by: </strong>
      <select onChange={props.handleSort}>
        <option value="Alphabetically">Alphabetically</option>
        <option value="Price">Price</option>
      </select>
      <br/><br/>

      <label>
        <strong>Filter: </strong>
        <select onChange={props.handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
