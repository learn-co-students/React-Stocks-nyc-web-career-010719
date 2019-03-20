import React from 'react';

class SearchBar extends React.Component {

  state = {
    sortA: false,
    sortP: false,
    filter: ""
  }

  handleCheckboxChange = (e) => {
    if (e.target.value === "Alphabetically") {
      this.setState({sortA: !this.state.sortA})
    } else {
      this.setState({sortP: !this.state.sortB})
    }
    this.props.sortStocks(e.target.value)
  }

  handleFilter = (e) => {
    this.setState({filter: e.target.value})
    this.props.filterStocks(e.target.value)
  }

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.state.sortA} onChange={this.handleCheckboxChange}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.state.sortB} onChange={this.handleCheckboxChange}/>
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={this.handleFilter}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>


      </div>
    );
  }
}


export default SearchBar;
