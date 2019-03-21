import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const API = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {
    allStocks: [],
    portfolio: [],
    availableStocks: [],
    checked: false
  }

  componentDidMount(){
    fetch(API)
      .then(r=>r.json())
      .then(stocks => {
        this.setState({
          ...this.state,
          allStocks: stocks,
          availableStocks: stocks
        })
      })
  }

  buyStock = (stock) => {
    let index = this.state.availableStocks.indexOf(stock)
    this.state.availableStocks.splice(index, 1)
    let newStocks = this.state.availableStocks
    this.setState( (prevState) => ({
      allStocks: [...prevState.allStocks],
      portfolio: [...prevState.portfolio, stock],
      availableStocks: newStocks,
    }))
  }

  sellStock = (stock) => {
    let index = this.state.portfolio.indexOf(stock)
    this.state.portfolio.splice(index, 1)
    let newStocks = this.state.portfolio
    this.setState( (prevState) => ({
      allStocks: [...prevState.allStocks],
      portfolio: newStocks,
      availableStocks: [...prevState.availableStocks, stock],
    }))
  }

  sortAlphabetically = () => {
  console.log('ca',this.state.checked);
    let sortedAvailable = this.state.availableStocks.sort(function(a, b){
      if(a.ticker < b.ticker){ return -1; }
      if(a.ticker > b.ticker){ return 1; }
      return 0})

    let sortedPortfolio = this.state.portfolio.sort(function(a, b){
      if(a.ticker < b.ticker) { return -1; }
      if(a.ticker > b.ticker) { return 1; }
      return 0})

    this.setState((prevState)=>({
      ...this.state,
      portfolio: sortedPortfolio,
      availableStocks: sortedAvailable,

    }))
  }

  sortPrice = () => {
    console.log('cp',this.state.checked);
    let sortedAvailable = this.state.availableStocks.sort(function(a, b){
      if(a.price < b.price){ return -1; }
      if(a.price > b.price){ return 1; }
      return 0})

    let sortedPortfolio = this.state.portfolio.sort(function(a, b){
      if(a.price < b.price) { return -1; }
      if(a.price > b.price) { return 1; }
      return 0})

    this.setState((prevState)=>({
      ...this.state,
      portfolio: sortedPortfolio,
      availableStocks: sortedAvailable,

    }))
  }

  sortStocks = (e) => {
    let value = e.target.value === "Alphabetically" ? true : false
    if (e.target.value === "Alphabetically") {
      this.sortAlphabetically()
      this.setState((prevState)=>({
        ...this.state,
        checked: value
      }))
    } else if (e.target.value === "Price") {
      this.sortPrice()
      this.setState((prevState)=>({
        ...this.state,
        checked: value
      }))
    }
  }

  filterStocks = (e) => {
    console.log("filter");
    console.log(this.state.availableStocks);
    let filterAvailable = this.state.availableStocks.filter(stock => stock.type === e.target.value)
    let filterPortfolio = this.state.portfolio.filter(stock => stock.type === e.target.value)
    this.setState({
      ...this.state,
      portfolio: filterPortfolio,
      availableStocks: filterAvailable,
    }
  )
  }


  render() {
    return (
      <div>
        <SearchBar
          stocks={this.state.allStocks}
          sortStocks={this.sortStocks}
          filterStocks={this.filterStocks}
          checked={this.state.checked}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.state.allStocks}
                portfolio={this.state.portfolio}
                availableStocks={this.state.availableStocks}
                buyStock={this.buyStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.state.allStocks}
                portfolio={this.state.portfolio}
                sellStock={this.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
