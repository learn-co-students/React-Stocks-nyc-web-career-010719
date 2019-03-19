import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    allStocks:[],
    filteredStocks: [],
    myStocks: [],
    selectedOption: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stockResponse => {
      this.setState({
        allStocks: stockResponse,
        filteredStocks: stockResponse
      })
    })
  }

  buyStock = (id) => {
    let boughtStock = this.state.allStocks.find(stock => stock.id === id)
    let index = this.state.myStocks.indexOf(boughtStock)
    let newStocks = [...this.state.myStocks, boughtStock ]
    let removeStocks = [...this.state.filteredStocks]
    removeStocks.splice(index, 1)
    if (!this.state.myStocks.includes(boughtStock)){
    this.setState({
      myStocks: newStocks,
      filteredStocks: removeStocks
    }, () => console.log(this.state.filteredStocks))
    }
  }

  sellStock = (id) => {
    let sellStock = this.state.myStocks.find(stock=> stock.id === id)
    let index = this.state.myStocks.indexOf(sellStock)
    let newStocks = [...this.state.myStocks]
    newStocks.splice(index, 1)
    this.setState({
      myStocks: newStocks
    })
  }

  searchStocks = (event) => {
  let newFilteredStocks = [...this.state.allStocks]
  newFilteredStocks = newFilteredStocks.filter(stock =>
      stock.type === event.target.value)
      this.setState({
        filteredStocks: newFilteredStocks
      }, console.log(this.state.filteredStocks))
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    })
    if (event.target.value == "Price"){
      this.handleSortPrice(this.state.filteredStocks)
    }
    else if (event.target.value == "Alphabetically"){
      this.handleSortAlphabetically(this.state.filteredStocks)
    }
  }

  handleSortPrice = (array) => {
    let sortedArray = array.sort(function(a, b){
      return a.price-b.price
    })
  }

  handleSortAlphabetically = (array) => {
    let sortedArray = array.sort(function(a, b){
      return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
    })
  }


  render() {
    return (
      <div>
        <SearchBar searchStocks={this.searchStocks} handleOptionChange ={this.handleOptionChange} selectedOption={this.state.selectedOption}/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.state.filteredStocks} buyStock={this.buyStock} myStocks={this.state.myStocks} sellStock={this.sellStock} renderAllStocks={this.renderAllStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
