import React, { Component } from 'react';
import Stock from '../components/Stock'


class StockContainer extends Component {
  sortStocks = () => {
    if (this.props.sortByPrice === false) {
      return this.props.stocks.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else {
      return this.props.stocks.sort(function(a, b) {
        return a.price - b.price;
      });
    }
  };

  mapStocks = () => {
    return this.sortStocks().map(stock => {
      return (
        <Stock
          key={stock.id}
          stock={stock}
          addStockToPortfolio={this.props.addStockToPortfolio}
          portfolioStocks={this.props.portfolioStocks}
        />
      );
    });
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {this.mapStocks()}
      </div>
    );
  }
}

export default StockContainer;
