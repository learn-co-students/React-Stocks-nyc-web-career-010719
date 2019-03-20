import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  //STATE & LIFECYCLE***********************************************************

  state={
    stocks: [],
    portfolio: [],
    selected: null,
    filteredStocks: []
  }

  componentDidMount(){
    this.fetchStocks()
  }

  //CONTAINER METHODS***********************************************************

  fetchStocks = () => {
    fetch("http://localhost:3000/stocks").then(res => res.json())
    .then(json => {
      this.setState({
        stocks: json,
        filteredStocks: json
      })
    })
  }

  stockClicks = (id) => {
    if (this.state.portfolio.find(stock => stock.id === id)){
      this.removeStockFromPortfolio(id)
    } else {
      this.addStockToPortfolio(id)
    }
  }

  addStockToPortfolio = (id) => {
    let myNewStock = this.state.stocks.find(stock => stock.id === id)
    let currentPortfolio = this.state.portfolio
    this.setState({
      portfolio: [...currentPortfolio, myNewStock]
    })
  }

  removeStockFromPortfolio = (id) => {
    let currentPortfolio = this.state.portfolio
    let stockToRemove = this.state.stocks.find(stock => stock.id === id)
    currentPortfolio.splice(currentPortfolio.indexOf(stockToRemove), 1)
    this.setState({
      portfolio: currentPortfolio
    })
  }

  //SEARCHBAR METHODS***********************************************************

  handleSort = (target) => {
    let order
    let selected
    if (target.value === "Alphabetically"){
      selected = "Alphabetically"
      order = this.state.stocks.sort((a,b)=>{
        return a.ticker.localeCompare(b.ticker)
      })
    } else if (target.value === "Price"){
      selected = "Price"
      order = this.state.stocks.sort((a,b)=>{
        return a.price - b.price
      })
    }
    this.setState({
      stocks: order,
      selected: selected
    }, ()=>console.log(this.state))
  }

  handleFilter = (target) => {
    let filteredStocks
    if(target.value === "Tech"){
      filteredStocks = this.state.stocks.filter(stock => stock.type === "Tech")
    } else if (target.value=== "Finance"){
      filteredStocks = this.state.stocks.filter(stock => stock.type === "Finance")
    } else if (target.value === "Sportswear"){
      filteredStocks = this.state.stocks.filter(stock => stock.type === "Sportswear")
    }
    this.setState({filteredStocks}, () => console.log(this.state.filteredStocks))
  }

  //RENDER**********************************************************************

  render() {
    return (
      <div>
        <SearchBar
          selected={this.state.selected}
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                filteredStocks={this.state.filteredStocks}
                portfolio={this.state.portfolio}
                stockClicks={this.stockClicks}
              />
            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.state.portfolio}
                stockClicks={this.stockClicks}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
