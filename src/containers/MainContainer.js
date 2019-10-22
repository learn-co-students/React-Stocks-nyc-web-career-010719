import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {


  state = {
    stocks: [],
    portfolio: [],
    selectedOption: "",
    filter: "",
    filteredStocks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => {
      this.setState({stocks})
    })
  }

  handleClick = (stock) => {
    let oldPortfolio = this.state.portfolio
    if (!this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: [...oldPortfolio, stock],
      })
    }
    else {
      let newPortfolio = oldPortfolio.filter(port => {
        return port.id !== stock.id
      })
      this.setState({
        portfolio: newPortfolio
      })
    }
  }

  sortStocks = (e) => {
    if (e.target.value === "Alphabetically") {
      let sorted = [...this.state.stocks].sort((a, b) => a.name.localeCompare(b.name))
      this.setState({
        stocks: sorted,
        selectedOption: "Alphabetically"
      })
    }

    else if (e.target.value === "Price") {
      let sorted = [...this.state.stocks].sort((a, b) => a.price - b.price)
      this.setState({
        stocks: sorted,
        selectedOption: "Price"
      })
    }
  }

  filterStocks = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  passStocks = () => {
    if (this.state.filter === "") {
      return this.state.stocks
    }
    else {
      let stocks = [...this.state.stocks]
      let filteredStocks = stocks.filter(stock => {
        return stock.type === this.state.filter
      })
      return filteredStocks
    }
  }


  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} selectedOption={this.state.selectedOption} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.passStocks()} handleClick={this.handleClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.handleClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
