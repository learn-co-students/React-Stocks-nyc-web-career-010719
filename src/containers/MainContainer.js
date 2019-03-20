import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    allStocks: [],
    portfolioStocks: [],
    sort: '',
    filter: ''
  }

  fetchStocks(){
    fetch('http://localhost:4000/stocks')
    .then(r => r.json())
    .then(stocks => this.setState({ stocks:stocks, allStocks:stocks }))
  }

  componentDidMount(){
    this.fetchStocks()
  }


  addStockToPortfolio = (id) => {
    let addedStock = this.state.stocks.find(stock=>{return stock.id===id})
    let currentPortfolio=this.state.portfolioStocks
    this.setState({
      portfolioStocks: [...currentPortfolio, addedStock]
    })
  }

  removeStockFromPortfolio = (id) => {
    let removedStock = this.state.portfolioStocks.find(stock=>{return stock.id===id})
    let oldPortfolio = this.state.portfolioStocks
    oldPortfolio.splice(oldPortfolio.findIndex(e=>e === removedStock), 1)
    this.setState({
      portfolioStocks: oldPortfolio
    })
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
    let oldStocks = this.state.allStocks
    let filteredStocks = oldStocks.filter(stock=>stock.type===e.target.value)
    this.setState({
      stocks: filteredStocks
    })
  }



  handleSort = (e) => {
    if (e.target.value === "Alphabetically") {
      let sortedStocks = this.state.stocks.sort(this.compare)
        this.setState({
          sort: e.target.value,
          stocks: sortedStocks
        })
    } else if (e.target.value === "Price") {
        let sortedStocks = this.state.stocks.sort(this.comparePrice)
          this.setState({
            sort: e.target.value,
            stocks: sortedStocks
          })
        }
  }

  compare(a,b) {
   if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  comparePrice(a,b) {
   if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  }


  render() {
    return (
      <div>
        <SearchBar filter={this.handleFilter} sort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addStock={this.addStockToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} removeStock={this.removeStockFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
