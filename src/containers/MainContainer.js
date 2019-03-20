import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    purchasedStocks: [],
    filterStocks: [],
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks() {
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(stocks => this.setState({stocks, filterStocks:stocks}))
  }

  buyStock = (stock) => {
    if (!this.state.purchasedStocks.find(owned => stock.ticker === owned.ticker)) {
      this.setState({
        purchasedStocks: [...this.state.purchasedStocks,stock]
      })
    }
  }

  sellStock = (stock) => {
    let updatedStock = this.state.purchasedStocks.filter(owned => owned.ticker !== stock.ticker)
    this.setState({
      purchasedStocks: updatedStock
    })
  }

  handleSort = (e) => {
    let order;

    if (e === 'Alphabetically') {
      order = this.state.stocks.sort((stock1,stock2) => {
        return stock1.name.localeCompare(stock2.name)
      })
    } else if (e === 'Price') {
      order = this.state.stocks.sort((stock1,stock2) => {
        return stock1.price - stock2.price
      })
    } else if (e === 'Tech') {
      order = this.state.stocks.filter(stock => stock.type === 'Tech')
    } else if (e === 'Sportswear') {
      order = this.state.stocks.filter(stock => stock.type === 'Sportswear')
    } else if (e === 'Finance') {
      order = this.state.stocks.filter(stock => stock.type === 'Finance')
    }
    console.log(order)
    this.setState({
      filterStocks: order
    })
  }

  render() {
    return (
      <div>
        <SearchBar handleSort={this.handleSort}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.filterStocks} buyStock={this.buyStock}/>
            </div>
            <div className="col-4">
              <PortfolioContainer stocks={this.state.purchasedStocks} sellStock={this.sellStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
