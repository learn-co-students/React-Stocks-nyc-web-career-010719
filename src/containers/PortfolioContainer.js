import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  filterStocks = () => {
    return this.props.stocks.filter(stock => {
      return this.props.portfolioStocks.includes(stock.id);
    });
  };

  displayPortfolioStocks = () => {
    return this.filterStocks().map(stock => {
      return (
        <Stock
          key={stock.id}
          stock={stock}
          removeStockFromPortfolio={this.props.removeStockFromPortfolio}
          portfolioStocks={this.props.portfolioStocks}
        />
      );
    });
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.portfolioStocks.length > 0 && this.displayPortfolioStocks()}
      </div>
    );
  }
}

export default PortfolioContainer;
