import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>

        <strong>Sort by:</strong>
        <label>
          <input
            type="button"
            value="Alphabetically"
            onClick={e => this.props.handleSort(e)}
          />
        </label>
        <label>
          <input
            type="button"
            value="Price"
            onClick={e => this.props.handleSort(e)}
          />
        </label>

        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.props.handleFilter}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>

      </div>
    );
  };
};

export default SearchBar;
