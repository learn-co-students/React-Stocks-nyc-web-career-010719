import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filterTerm: "default",
    sortBy: "default"
  }

  handleAddToPortfolio = id => {
    let foundStock = this.state.stocks.find(stock => stock.id === id)
    let currentPortfolio = this.state.portfolio
    let newStocksArr = this.state.stocks.filter(stock => stock.id !== id)
    this.setState({
      portfolio: [...currentPortfolio, foundStock],
      stocks: newStocksArr
    })
  }

  handleRemoveFromPortfolio = id => {
    let foundStock = this.state.portfolio.find(stock => stock.id === id)
    let currentStocks = this.state.stocks
    let newPortfolio = this.state.portfolio.filter(stock => stock.id !== id)
    this.setState({
      portfolio: newPortfolio,
      stocks: [...currentStocks, foundStock]
    })
  }

  filterStocks = stocks => {
    let filtered = stocks.filter(stock => stock.type === this.state.filterTerm)
    return filtered
  }

  sortStocks = stocks => {
    if (this.state.sortBy === "Alphabetically") {
      let sortedStocks = stocks.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      return sortedStocks
    } if (this.state.sortBy === "Price") {
      let sortedStocks = stocks.sort(function(a, b) {
        var textA = a.price
        var textB = b.price
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      return sortedStocks
    }
  }

  passDownStocks = () => {
    let stocks = this.state.stocks
    if (this.state.sortBy === "Alphabetically") {
      stocks = this.sortStocks(stocks)
    }
    else if (this.state.sortBy === "Price") {
      stocks = this.sortStocks(stocks)
    }
    if (this.state.filterTerm === 'Sportswear') {
      return this.filterStocks(stocks)
    } else if (this.state.filterTerm === 'Tech') {
      return this.filterStocks(stocks)
    } else if (this.state.filterTerm === 'Finance') {
      return this.filterStocks(stocks)
    } else {
      return stocks
    }
  }

  handleSort = e => {
    this.setState({
      sortBy: e.target.value
    })
  }

  handleFilter = e => {
    this.setState({
      filterTerm: e.target.value
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => {
      this.setState({ stocks })
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
          sortBy={this.state.sortBy}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.passDownStocks()}
                portfolio={this.state.portfolio}
                handleAddToPortfolio={this.handleAddToPortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                stocks={this.passDownStocks()}
                portfolio={this.state.portfolio}
                handleRemoveFromPortfolio={this.handleRemoveFromPortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
