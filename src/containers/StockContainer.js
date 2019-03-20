import React, { Component } from 'react';
import Stock from '../components/Stock';

class StockContainer extends Component {
  buyOrSell = id => {
    this.props.buyOrSell(id);
  };

  renderStocks = () => {
    let stocksToRender;

    if (this.props.action === 'filter') {
      stocksToRender = this.props.filtered;
    } else if (this.props.action === 'sort') {
      stocksToRender = this.props.sorted;
    } else {
      stocksToRender = this.props.stocks;
    };

    return stocksToRender.map(stock => {
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
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  };
};

export default StockContainer;
