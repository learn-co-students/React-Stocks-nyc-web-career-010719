import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    portfolioStocks: [],
    filter: "None",
    sortBy: "none",
    price: false
  };

  addStockToPortfolio = id => {
    let addStock = [...this.state.portfolioStocks, id];
    this.setState({ portfolioStocks: addStock });
  };

  removeStockFromPortfolio = id => {
    let currentPortfolio = [...this.state.portfolioStocks];
    let removeStock = currentPortfolio.filter(stockId => {
      return stockId !== id;
    });
    this.setState({ portfolioStocks: removeStock });
  };

  setFilter = event => {
    this.setState({
      filter: event.target.value
    });
  };

  filteredStocks = () => {
    if (this.state.filter === "None") {
      return this.props.stocks;
    } else {
      return this.props.stocks.filter(stock => {
        return stock.type === this.state.filter;
      });
    }
  };

  changeSort = event => {
    console.log("CHANGE SORT");
    this.setState({
      price: true
    });
  };

  changeSortAlpha = event => {
    console.log("CHANGE ALPHA");
    this.setState({
      price: false
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          setFilter={this.setFilter}
          alphaRadioBtnChecked={this.state.alphabetically}
          priceRadioBtnChecked={this.state.price}
          changeSort={this.changeSort}
          changeSortAlpha={this.changeSortAlpha}
        />
        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.filteredStocks()}
              addStockToPortfolio={this.addStockToPortfolio}
              portfolioStocks={this.state.portfolioStocks}
              sortByPrice={this.state.price}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolioStocks={this.state.portfolioStocks}
              stocks={this.props.stocks}
              removeStockFromPortfolio={this.removeStockFromPortfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
