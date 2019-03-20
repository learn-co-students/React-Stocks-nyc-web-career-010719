import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  buyOrSell = id => {
    this.props.buyOrSell(id);
  };

  renderStocks = () => {
    return this.props.stocks.map(stock => {
      return (
        <Stock
          buyOrSell={this.buyOrSell}
          key={stock.id}
          {...stock}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
