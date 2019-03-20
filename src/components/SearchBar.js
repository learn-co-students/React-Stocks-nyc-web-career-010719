import React from 'react';

const SearchBar = (props) => {
  console.log(props)
  return (
    <div>
        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            value="alphabetically"
            checked={props.priceRadioBtnChecked ? false : true}
            onChange={props.changeSortAlpha}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="price"
            checked={props.priceRadioBtnChecked ? true : false}
            onChange={props.changeSort}
          />
          Price
        </label>
        <br />

        <label>
          <strong>Filter:</strong>
          <select onChange={props.setFilter}>
            <option value="None">None</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  };



export default SearchBar;
