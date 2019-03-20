import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    sorted: [],
    portfolio: []
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(s => {
      this.setState({stocks: s, sorted: s})
    })
  }

  componentDidMount = () => {
    this.fetchStocks()
  }

  sellStock = (stockId) => {
    console.log("got " + stockId);
    let s = this.state.stocks.find(s => s.id == stockId)
    this.setState({ portfolio: [...this.state.portfolio, s] })
  }

  sellStockP = (stockId) => {
    console.log("got " + stockId);
    let s = this.state.portfolio.find(s => s.id === stockId)
    this.setState({portfolio: this.state.portfolio.filter(stock => {
      return stock.id != stockId
    })});
  }

  sortStocks = (value) => {
    if (value === "Alphabetically") {
      let sort = [...this.state.stocks].sort((a,b) => {
        var x = a.ticker.toLowerCase()
        var y = b.ticker.toLowerCase()
        if (x < y) {return -1}
        if (x > y) {return 1}
        return 0
      })
      this.setState({sorted: sort})
    } else if (value === "Price"){
      let sort = [...this.state.stocks].sort((a,b) => {
        var x = a.price
        var y = b.price
        if (x < y) {return -1}
        if (x > y) {return 1}
        return 0
      })
      this.setState({sorted: sort})
    } else {
      this.setState({sorted: this.state.stocks})
    }
  }

  filterStocks = (value) => {
    let filter = [...this.state.stocks].filter(s => s.type === value)
    this.setState({sorted: filter})
  }

  render() {
    console.log(this.state.portfolio);
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.sorted} sellStock={this.sellStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} sellStockP={this.sellStockP}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
