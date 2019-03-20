import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    allStocks: [],
    stocks: [],
    portfolio: [],
    allPortfolio: [],
    sortAlph: false,
    sortPrice: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then( json => {
      this.setState({ stocks: json, allStocks: json})
    })
  }

  addToPortfolio = (stock) => {
    this.setState( prevState => {
      return {
        stocks: prevState.stocks.filter( s => stock.id !== s.id),
        portfolio: [...prevState.portfolio, stock],
        allPortfolio: [...prevState.allPortfolio, stock]
      }
    })
  }

  removeFromPortfolio = (stock) => {
    this.setState( prevState => {
      return {
        stocks: [...prevState.stocks, stock],
        portfolio: prevState.portfolio.filter( s => stock.id !== s.id),
        allPortfolio: prevState.allPortfolio.filter( s => stock.id !== s.id)
      }
    })
  }

  sortStocks = (e) => {
    if (e.target.value === "Alphabetically") {
      this.setState( prevState => {
        return {
          stocks: prevState.stocks.sort(this.sortName),
          portfolio: prevState.portfolio.sort(this.sortName),
          sortAlph: true,
          sortPrice: false
        }
      })
    } else {
      this.setState( prevState => {
        return {
          stocks: prevState.stocks.sort(this.sortPrice),
          portfolio: prevState.portfolio.sort(this.sortPrice),
          sortAlph: false,
          sortPrice: true
        }
      })
    }
  }

  filterStocks = (e) => {
    let sector = e.target.value
    this.setState( prevState => {
      return {
        stocks: prevState.allStocks.filter( s => s.type === sector),
        portfolio: prevState.allPortfolio.filter( s => s.type === sector)
      }
    })
  }

  sortName(a,b) {
    if (a.name < b.name) {
      return -1
    } else if (a.name > b.name) {
      return 1
    }
    return 0
  }

  sortPrice(a,b) {
    if (a.price < b.price) {
      return -1
    } else if (a.price > b.price) {
      return 1
    }
    return 0
  }

  render() {
    console.log("main container", this.state);

    return (
      <div className="app">
        <SearchBar
          sortStocks={this.sortStocks}
          filterStocks={this.filterStocks}
          sortAlph={this.state.sortAlph}
          sortPrice={this.state.sortPrice}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.state.stocks}
                addToPortfolio={this.addToPortfolio}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.state.portfolio}
                removeFromPortfolio={this.removeFromPortfolio}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
